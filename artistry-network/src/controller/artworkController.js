// File: src/controllers/artwork.controller.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const prisma = require('../generated/client')
const validateArtwork = require('../validation/validateArtwork');
const artworkModel = require('../model/artworkModel');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/artworks');
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
    console.log(req.body);
    const authorId = req.user.userId;
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
        const artworkData = ({
            title: data.title,
            description: data.description,
            price: parseFloat(data.price),
            status: 'pending', // Mặc định là chờ duyệt
            imageUrls: data.image,
            dimensions: data.dimensions,
            authorId: authorId,
            categoryId: parseInt(data.categoryId),
        });
        console.log(artworkData);
        const newArtwork = await artworkModel.create(artworkData);
        res.status(201).json(newArtwork);
    } catch (error) {
        imageUrls.forEach(image => {
            fs.unlinkSync(image.path)
        });
        res.status(500).json({ message: "Lỗi server khi tạo tác phẩm.", error: error.message })
    }
};

//tìm tác phẩm nổi bật
const getFeaturedArtworks = async (req, res) => {
    try {
        const artworks = await artworkModel.findFeatured();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};

//tìm tác phẩm mới nhất
const getLatestArtworks = async (req, res) => {
    try {
        const artworks = await artworkModel.findLatest();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
//admin
// Lấy danh sách các tác phẩm đang chờ duyệt
const getPendingArtworks = async (req, res) => {
    try {
        const artworks = await artworkModel.findByStatus('pending');
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
// Duyệt một tác phẩm
const approveArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        await artworkModel.updateStatus(id, 'approved');
        res.status(200).json({ message: "Tác phẩm đã được phê duyệt." });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
// Từ chối một tác phẩm
const rejectArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        await artworkModel.updateStatus(id, 'rejected');
        res.status(200).json({ message: "Tác phẩm đã bị từ chối." });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};
// Xử lý việc thêm/sửa reaction
const handleReaction = async (req, res) => {
    try {
        const artworkId = req.params.id;
        const userId = req.user.userId;
        const { reactionType } = req.body; // vd: 'like', 'love'

        // Tìm ID của loại reaction từ tên
        const reactionTypeRecord = await prisma.reactionType.findUnique({
            where: { name: reactionType }
        });

        if (!reactionTypeRecord) {
            return res.status(400).json({ message: "Loại reaction không hợp lệ." });
        }

        await artworkModel.upsertReaction(userId, artworkId, reactionTypeRecord.id);
        res.status(200).json({ message: "Cập nhật cảm xúc thành công." });

    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};

// Xử lý việc bỏ reaction
const removeReaction = async (req, res) => {
    try {
        const artworkId = req.params.id;
        const userId = req.user.userId;

        await artworkModel.deleteReaction(userId, artworkId);
        res.status(200).json({ message: "Đã bỏ cảm xúc." });
    } catch (error) {
        // Bắt lỗi nếu người dùng cố xóa reaction không tồn tại
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Bạn chưa có cảm xúc nào với tác phẩm này." });
        }
        res.status(500).json({ message: "Lỗi server." });
    }
};
module.exports = {
    upload,
    getApprovedArtworks,
    getArtworkById,
    getLatestArtworks,
    getFeaturedArtworks,
    createArtwork,
    getPendingArtworks,
    approveArtwork,
    rejectArtwork,
    handleReaction,
    removeReaction
};