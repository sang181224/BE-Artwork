const multer = require('multer');
const path = require('path');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const userModel = require('../model/userModel');
const validateAccount = require('../validation/validateAccount');
const { formatArtwork } = require('../utils/artworkFormatter');

//Thiết lập multer để xử lý tệp hình ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/member');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});
// const upload = multer({ storage });
const upload = multer({ storage }).single('avatar');
const createMember = async (req, res) => {
    let avatarFile;
    try {
        const data = req.body;
        avatarFile = req.file;
        const errors = validateAccount(data, avatarFile, false);
        if (Object.keys(errors).length > 0) {
            if (avatarFile) {
                fs.unlinkSync(avatarFile.path);
            }
            return res.status(400).json(errors);
        }
        const errorsEmail = await userModel.checkEmail(data);
        if (Object.keys(errorsEmail).length > 0) {
            if (avatarFile) {
                fs.unlinkSync(avatarFile.path);
            }
            return res.status(400).json(errorsEmail);
        }
        data.roleId = 2;
        data.avatar = avatarFile ? avatarFile.path : '';
        //Mã hoá pass
        data.password = await bcryptjs.hash(data.password, 10);
        const member = await userModel.createUser(data);
        res.json(member);
    } catch (error) {
        fs.unlinkSync(avatarFile.path);
        return res.status(500).json({ message: "Lỗi rồi ", error })
    }

}
function createJWT(userId, username, roleId) {
    const token = jwt.sign({ userId, username, roleId }, 'sang181224', { expiresIn: '5h' });
    return token;
}
const loginMember = async (req, res) => {
    const data = req.body;
    const errors = {};
    if (!data.email) {
        errors.email = 'Mail không được để trống';
    }
    if (!data.password) {
        errors.password = 'Password không được để trống';
    }
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }
    const checkLogin = await userModel.checkLoginUser(data);
    if (!checkLogin) {
        return res.status(400).json({ message: 'email hoặc password không chính xác' });
    }
    const token = createJWT(checkLogin.id, checkLogin.name, checkLogin.roleId)
    res.json({ message: 'Đăng nhập thành công', token: token, user: checkLogin })
}
const getMemberById = async (req, res) => {
    const userId = parseInt(req.user.userId);
    const user = await userModel.getUserById(userId);
    if (!user) {
        return res.status(404).json({ message: "Không tìm thấy user" });
    }
    console.log("Đã tìm thấy user ", user);
    res.json(user);
}
const updateMemberById = async (req, res) => {
    try {
        const userId = parseInt(req.user.userId);
        const data = req.body;
        const avatarFile = req.file;
        console.log('image củ: ', data.oldAvatar);
        console.log('image mới', avatarFile);
        data.id = userId;
        const errors = validateAccount(data, avatarFile, true);
        if (Object.keys(errors).length > 0) {
            if (avatarFile) {
                fs.unlinkSync(avatarFile.path);
            }
            return res.status(400).json(errors);
        }
        const errorsEmail = await userModel.checkEmail(data);
        if (Object.keys(errorsEmail).length > 0) {
            if (avatarFile) {
                fs.unlinkSync(avatarFile.path);
            }
            return res.status(400).json(errorsEmail);
        }
        const dataToUpdate = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            id_country: parseInt(data.id_country),
        };
        if (avatarFile) {
            dataToUpdate.avatar = avatarFile.path;
            if (data.oldAvatar && fs.existsSync(data.oldAvatar)) {
                fs.unlinkSync(data.oldAvatar);
            }
        } else {
            dataToUpdate.avatar = data.oldAvatar || '';
        }
        dataToUpdate.id_country = parseInt(data.id_country);
        dataToUpdate.password = await bcryptjs.hash(data.password, 10);
        const user = await userModel.updateUserById(dataToUpdate, userId);
        if (!user) {
            return res.status(404).json({ message: "Không tìm thấy user" });
        }
        console.log("Đã update thành công: ", user);
        return res.json({ message: "Cập nhật thành công", user });
    } catch (error) {
        console.error("Lỗi khi update admin: ", error);
        return res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật người dùng" });
    }
}
//Láy thông tin user cơ bản
const getProfile = async (req, res) => {
    try {
        const profileId = req.params.id;
        const loggedInUserId = req.user ? req.user.userId : null;

        const profile = await userModel.findBasicProfileById(profileId);

        if (!profile) {
            return res.status(404).json({ message: 'Không tìm thấy hồ sơ người dùng.' });
        }

        const isOwner = loggedInUserId === profile.id;

        res.status(200).json({
            isOwner,
            profile
        });
    } catch (error) {
        console.error("Lỗi khi lấy thông tin profile:", error);
        res.status(500).json({ message: "Lỗi server." });
    }
};
//thống kê dữ liệu số folloew, số tác phẩm đã duyệt, số người theo dõi
const getProfileStats = async (req, res) => {
    try {
        const { id } = req.params;
        const stats = await userModel.getStatsById(id);
        res.status(200).json(stats);
    } catch (error) {
        console.error("Lỗi khi lấy thông tin stats:", error);
        res.status(500).json({ message: "Lỗi server." });
    }
};
// HÀM MỚI: Lấy tác phẩm công khai cho tab tác phẩm
const getProfileArtworks = async (req, res) => {
    try {
        // Lấy ID người dùng từ middleware (nếu có)
        const { id } = req.params;
        const loggedInUserId = req.user ? req.user.userId : null;
        const artworks = await userModel.findApprovedArtworksByAuthor(id, loggedInUserId);

        const responseData = artworks.map(art => formatArtwork(art));
        
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};

// HÀM MỚI: Lấy các bài đăng cần quản lý cho tab 'Quản lý bài đăng'
const getProfileDrafts = async (req, res) => {
    try {
        const profileId = req.params.id;
        const loggedInUserId = req.user.userId;
        if (loggedInUserId !== parseInt(profileId)) {
            return res.status(403).json({ message: "Không có quyền truy cập." });
        }

        const drafts = await userModel.findNonPublicArtworksByAuthor(profileId);
        res.status(200).json(drafts);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
const follow = async (req, res) => {
    try {
        const followerId = req.user.userId; // ID của người đi theo dõi (lấy từ token)
        const followingId = parseInt(req.params.id); // ID của người được theo dõi (lấy từ URL)

        if (followerId === followingId) {
            return res.status(400).json({ message: "Bạn không thể tự theo dõi chính mình." });
        }

        await userModel.followUser(followerId, followingId);
        res.status(200).json({ message: "Theo dõi thành công." });
    } catch (error) {
        // Bắt lỗi nếu đã theo dõi rồi
        if (error.code === 'P2002') {
            return res.status(409).json({ message: "Bạn đã theo dõi người này rồi." });
        }
        res.status(500).json({ message: "Lỗi server." });
    }
};
module.exports = {
    createMember,
    upload,
    loginMember,
    getMemberById,
    updateMemberById,
    getProfile,
    follow,
    getProfileStats,
    getProfileArtworks,
    getProfileDrafts
}
