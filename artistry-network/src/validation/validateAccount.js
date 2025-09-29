const validateAccount = (data, avatarFile, isEdit = true) => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Vui lòng nhập tên';
    }
    if (!data.email) {
        errors.email = 'Vui lòng nhập email';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            errors.email = 'Email không hợp lệ';
        }
    }
    if (!data.password) {
        errors.password = 'Vui lòng nhập mật khẩu';
    }
    if(!data.confirmPassword){
        errors.password = 'Vui lòng nhập mật khẩu xác thực';
    }
    if(data.password && data.confirmPassword){
        if(data.password !== data.confirmPassword){
            errors.password = "Mật khẩu không trùng khớp";
        }
    }
    if(!avatarFile && !isEdit){
        errors.avatar = 'Vui lòng upload avatar';
    }
    if (avatarFile) {
        const allowedFormat = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSize = 1024 * 1024;
        if (!allowedFormat.includes(avatarFile.mimetype)) {
            errors.avatar = 'Định dạng file không hợp lệ, chỉ nhận JPEG, PNG, GIF';
        }
        if (avatarFile.size > maxSize) {
            errors.avatar = 'Dung lượng file quá lớn, vui lòng chọn file có dung lượng nhỏ hơn 1MB';
        }
    }
    return errors;
}
module.exports = validateAccount;