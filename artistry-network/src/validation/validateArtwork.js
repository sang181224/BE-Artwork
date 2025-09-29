function validateArtwork(data, file, isEdit = false) {
    const error = {}
    if (!data.title) error.title = 'Vui lòng nhập tiêu đề';
    if (!data.description) error.description = 'Vui lòng nhập mô tả';
    if (!data.price) error.price = 'Vui lòng nhập giá';
    if (!data.dimensions) error.dimensions = 'Vui lòng nhập kich thước';
    if (!data.categoryId) error.category = 'Vui lòng nhập tên thể loại';
    if (file.length === 0 && !isEdit) {
        error.image = 'Vui lòng chọn file';
    }
    if (file.length !== 0) {
        if (file.length > 5) {
            error.images = 'Chỉ được chọn tối đa 5 file';
        } else {
            const allowedFormat = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
            const maxSize = 1024 * 1024;
            const imageErrors = [];
            file.forEach((image, index) => {
                if (!allowedFormat.includes(image.mimetype)) {
                    imageErrors.push(`File ${index + 1} có định dạng không hợp lệ ( chỉ nhận file png, gif, jpeg)`);
                }
                if (image.size > maxSize) {
                    imageErrors.push(`File ${index + 1} có dung lượng quá lớn (> 1MB).`);
                }
            });
            if (imageErrors.length > 0) {
                error.images = imageErrors.join('\n');
            }
        }
    }
    return error;
}
module.exports = validateArtwork;