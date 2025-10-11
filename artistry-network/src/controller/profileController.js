const multer = require('multer');
const path = require('path');
const fs = require('fs');
const userModel = require('../model/userModel');

const profileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/member');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, req.user.userId + '-' + file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const uploadProfileImages = multer({ storage: profileStorage }).fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverPhoto', maxCount: 1 }
]);
const followUser = async (req, res) => {
    try {
        const followerId = req.user.userId;
        const followingId = parseInt(req.params.id);

        if (followerId === followingId) {
            return res.status(400).json({ message: "Bạn không thể tự theo dõi chính mình." });
        }
        await userModel.follow(followerId, followingId);
        res.status(200).json({ message: "Theo dõi thành công." });
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({ message: "Bạn đã theo dõi người này rồi." });
        }
        res.status(500).json({ message: "Lỗi server." });
    }
};

const unfollowUser = async (req, res) => {
    try {
        const followerId = req.user.userId;
        const followingId = parseInt(req.params.id);

        await userModel.unfollow(followerId, followingId);
        res.status(200).json({ message: "Bỏ theo dõi thành công." });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Bạn chưa theo dõi người này." });
        }
        res.status(500).json({ message: "Lỗi server." });
    }
};
const updateProfile = async (req, res) => {
    const userId = req.user.userId;
    const data = req.body;
    const files = req.files;

    try {
        const userToUpdate = await userModel.findById(userId);
        if (!userToUpdate) {
            return res.status(404).json({ message: "Không tìm thấy người dùng." });
        }

        const dataToUpdate = {
            name: data.name,
            bio: data.bio,
        };

        // Xử lý upload avatar mới
        if (files && files.avatar) {
            dataToUpdate.avatarUrl = files.avatar[0].path;
            // Xóa file avatar cũ nếu có
            if (userToUpdate.avatarUrl && fs.existsSync(userToUpdate.avatarUrl)) {
                fs.unlinkSync(userToUpdate.avatarUrl);
            }
        }
        
        // Xử lý upload ảnh bìa mới
        if (files && files.coverPhoto) {
            dataToUpdate.coverPhotoUrl = files.coverPhoto[0].path;
            if (userToUpdate.coverPhotoUrl && fs.existsSync(userToUpdate.coverPhotoUrl)) {
                fs.unlinkSync(userToUpdate.coverPhotoUrl);
            }
        }

        const updatedUser = await userModel.updateProfile(userId, dataToUpdate);
        res.status(200).json(updatedUser);

    } catch (error) {
        // Dọn dẹp file mới upload nếu có lỗi
        if (files && files.avatar) fs.unlinkSync(files.avatar[0].path);
        if (files && files.coverPhoto) fs.unlinkSync(files.coverPhoto[0].path);
        console.log(error)
        res.status(500).json({ message: "Lỗi server." });
    }
};
module.exports = {
    uploadProfileImages,
    followUser,
    unfollowUser,
    updateProfile
}