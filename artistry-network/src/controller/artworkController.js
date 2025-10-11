// File: src/controllers/artwork.controller.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const validateArtwork = require('../validation/validateArtwork');
const artworkModel = require('../model/artworkModel');
const { formatArtwork } = require('../utils/artworkFormatter');
const { error } = require('console');

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
// const getApprovedArtworks = async (req, res) => {
//     try {
//         // Lấy ID người dùng từ middleware (nếu có)
//         const loggedInUserId = req.user ? req.user.userId : null;
//         const artworks = await artworkModel.findAllApproved(loggedInUserId);
//         const responseData = artworks.map(art => formatArtwork(art));
//         // Bạn có thể thêm logic để format dữ liệu ở đây nếu cần
//         res.status(200).json(responseData);
//     } catch (error) {
//         res.status(500).json({ message: "Lỗi server khi lấy tác phẩm.", error: error.message });
//     }
// };

const getApprovedArtworks = async (req, res) => {
    try {
        // Lấy các tham số từ query string, ví dụ: /artworks?page=2&sortBy=popular
        const { page, sortBy, categoryId, minPrice, maxPrice } = req.query;
        const loggedInUserId = req.user ? req.user.userId : null;

        // Gọi model với các tùy chọn
        const { artworks, totalPages } = await artworkModel.findAll({
            page,
            sortBy,
            categoryId,
            minPrice,
            maxPrice,
            loggedInUserId
        });

        // Định dạng lại dữ liệu trước khi gửi đi
        const responseData = artworks.map(art => formatArtwork(art, loggedInUserId));

        res.status(200).json({
            artworks: responseData,
            totalPages: totalPages,
            currentPage: parseInt(page) || 1
        });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi lấy tác phẩm.", error: error.message });
    }
};

// Lấy chi tiết một tác phẩm
const getArtworkById = async (req, res) => {
    try {
        const { id } = req.params;
        // Lấy ID người dùng từ middleware (nếu có)
        const loggedInUserId = req.user ? req.user.userId : null;
        const artwork = await artworkModel.findById(id, loggedInUserId);
        const responseData = formatArtwork(artwork, loggedInUserId);

        const commentsWithOwnership = artwork.comments.map(comment => ({
            ...comment,
            isOwner: loggedInUserId === comment.authorId
        }));

        const finnalResponse = {
            ...responseData,
            comments: commentsWithOwnership
        }

        if (!artwork) {
            return res.status(404).json({ message: "Không tìm thấy tác phẩm." });
        }
        res.status(200).json(finnalResponse);
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
const updateArtwork = async (req, res) => {
    const newImage = req.files || [];
    const cleanupNewImages = () => {
        if (newImage.length > 0) {
            newImage.forEach(file => fs.unlinkSync(file.path));
        }
    };
    try {
        const data = req.body;
        const artworkId = parseInt(req.params.id);
        const userId = parseInt(req.user.userId);
        const existingArtwork = await artworkModel.existingArtwork(artworkId);

        if (!existingArtwork) {
            cleanupNewImages();
            return res.status(404).json({ error: 'Không tìm thấy artwork' });
        }

        if (existingArtwork.authorId !== userId) {
            cleanupNewImages();
            return res.status(403).json({ error: 'Bạn không có quyền chỉnh sửa artwork này' });
        }

        const error = validateArtwork(data, newImage, true);
        if (Object.keys(error).length > 0) {
            cleanupNewImages();
            return res.status(400).json(error);
        }
        const imageDelete = data.imageDelete ? JSON.parse(data.imageDelete) : [];
        const oldImage = JSON.parse(existingArtwork.imageUrls || '[]');
        if (imageDelete.length > 0) {
            imageDelete.forEach(image => {
                if (fs.existsSync(image)) {
                    fs.unlinkSync(image);
                }
            });
        }
        const remainOldImage = oldImage.filter(image => !imageDelete.includes(image));
        const newImagePaths = newImage ? newImage.map(image => image.path) : [];
        const finalImage = [...remainOldImage, ...newImagePaths];
        if (finalImage.length === 0) {
            return res.status(400).json({ error: 'Tối thiểu là 1 ảnh' });
        }
        if (finalImage.length > 5) {
            return res.status(400).json({ error: 'Tối đa là 5 ảnh' });
        }
        const dataUpdate = {
            title: data.title,
            description: data.description,
            price: parseFloat(data.price),
            status: 'pending',
            imageUrls: JSON.stringify(finalImage),
            dimensions: data.dimensions,
            authorId: userId,
            categoryId: parseInt(data.categoryId),
        }
        const update = await artworkModel.update(artworkId, dataUpdate);
        res.json({ message: 'Cập nhật sản phẩm thành công', artwork: update });
    } catch (error) {
        console.error('Lỗi khi cập nhật artwork');
        if (newImage.length > 0) {
            newImage.forEach(file => fs.unlinkSync(file.path));
        }
        res.status(500).json('Lỗi ở phía server');
    }
}
const removeArtwork = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = parseInt(req.user.userId);
        const artwork = await artworkModel.existingArtwork(id);
        if (!artwork) {
            return res.status(404).json({ error: 'Không tìm thấy tác phẩm' });
        }
        if (artwork.authorId !== userId) {
            return res.status(403).json({ error: 'Bạn không có quyền xoá artwork này' });
        }
        // const imagePath = JSON.parse(artwork.imageUrls || '[]');
        // if (imagePath.length > 0) {
        //     imagePath.forEach((image) => {
        //         try {
        //             if (fs.existsSync(image)) {
        //                 fs.unlinkSync(image);
        //             }
        //         } catch (error) {
        //             console.log('Lỗi khi xoá file ', error);
        //         }
        //     })
        // }
        await artworkModel.remove(id);
        return res.json({ message: 'Xoá thành công' });
    } catch (error) {
        return res.status(500).json({error: 'Lỗi khi xoá tác phẩm ', error})
    }
}
//tìm tác phẩm nổi bật
const getFeaturedArtworks = async (req, res) => {
    try {
        // Lấy ID người dùng từ middleware (nếu có)
        const loggedInUserId = req.user ? req.user.userId : null;
        // console.log('userid ở controller: ', req.user);
        const artworks = await artworkModel.findFeatured(loggedInUserId);

        const responseData = artworks.map(art => formatArtwork(art, loggedInUserId));
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server." });
    }
};

//tìm tác phẩm mới nhất
const getLatestArtworks = async (req, res) => {
    try {
        // Lấy ID người dùng từ middleware (nếu có)
        const loggedInUserId = req.user ? req.user.userId : null;
        const artworks = await artworkModel.findLatest(loggedInUserId);
        const responseData = artworks.map(art => formatArtwork(art, loggedInUserId));
        res.status(200).json(responseData);
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

//cập nhật lượt xem cho tác phẩm
const handleViewCount = async (req, res) => {
    try {
        const { id } = req.params;
        await artworkModel.incrementViewCount(id);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Lỗi khi tăng lượt xem:", error);
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
        const reactionTypeRecord = await artworkModel.findReaction(reactionType);
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
    updateArtwork,
    removeArtwork,
    getApprovedArtworks,
    getArtworkById,
    getLatestArtworks,
    getFeaturedArtworks,
    createArtwork,
    getPendingArtworks,
    approveArtwork,
    rejectArtwork,
    handleReaction,
    removeReaction,
    handleViewCount
};