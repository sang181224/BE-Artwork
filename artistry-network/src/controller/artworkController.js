// File: src/controllers/artwork.controller.js
const multer = require('multer');
const validateArtwork = require('../validation/validateArtwork');
const artworkModel = require('../model/artworkModel');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/artworks'); // Thư mục lưu trữ tệp hình ảnh (phải tạo sẵn)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});
// const upload = multer({ storage });
const upload = multer({ storage }).array('imageUrls', 5);
// Lấy tất cả tác phẩm đã duyệt
const getApprovedArtworks = async (req, res) => {
    try {
        const artworks = await artworkModel.findAllApproved();
        // Bạn có thể thêm logic để format dữ liệu ở đây nếu cần
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi lấy tác phẩm.", error: error.message });
    }
};

// Lấy chi tiết một tác phẩm
const getArtworkById = async (req, res) => {
    try {
        const { id } = req.params;
        const artwork = await artworkModel.findById(id);
        if (!artwork) {
            return res.status(404).json({ message: "Không tìm thấy tác phẩm." });
        }
        res.status(200).json(artwork);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi lấy chi tiết tác phẩm.", error: error.message });
    }
};

// Tạo tác phẩm mới
const createArtwork = async (req, res) => {
    const userId = req.user.userId;
    const imageUrls = req.files || [];
    try {
        const data = req.body;
        const errors = validateArtwork(data, imageUrls);
        if (Object.keys(errors).length > 0) {
            if (imageUrls.length > 0) {
                imageUrls.forEach(image => {
                    fs.unlinkSync(image.path)
                });
            }
            return res.status(400).json(errors);
        }
        data.image = imageUrls ? imageUrls.map(file => file.path) : [];
        data.image = JSON.stringify(data.image);
        const dataAdd = ({
            title,
            description,
            price: parseFloat(price),
            status: 'pending', // Mặc định là chờ duyệt
            imageUrls,
            dimensions,
            authorId,
            categoryId: parseInt(categoryId),
        });
        console.log(dataAdd);
        const newArtwork = await artworkModel.create(artworkData);
        res.status(201).json(newArtwork);
    } catch (error) {
        imageUrls.forEach(image => {
            fs.unlinkSync(image.path)
        });
        res.status(500).json({ message: "Lỗi server khi tạo tác phẩm.", error: error.message })
    }
};

module.exports = {
    upload,
    getApprovedArtworks,
    getArtworkById,
    createArtwork,
    // updateArtwork, // (sẽ được thêm sau)
    // deleteArtwork, // (sẽ được thêm sau)
};