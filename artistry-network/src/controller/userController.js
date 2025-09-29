const multer = require('multer');
const path = require('path');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const userModel = require('../model/userModel');
const validateAccount = require('../validation/validateAccount');

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
        data.roleId = 1;
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
function createJWT(userId, username) {
    const token = jwt.sign({ userId, username }, 'sang181224', { expiresIn: '5h' });
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
    const token = createJWT(checkLogin.id, checkLogin.name)
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
module.exports = {
    createMember,
    upload,
    loginMember,
    getMemberById,
    updateMemberById
}
