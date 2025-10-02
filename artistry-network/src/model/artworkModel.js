// File: src/models/artwork.model.js
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

// const findAllApproved = () => {
//     return prisma.artwork.findMany({
//         where: { status: 'approved' },
//         orderBy: { createdAt: 'desc' },
//         include: {
//             author: { select: { id: true, name: true, avatarUrl: true } }
//         }
//     });
// };
const findAllApproved = (loggedInUserId) => {
    return prisma.artwork.findMany({
        where: { status: 'approved' },
        orderBy: { createdAt: 'desc' },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    avatarUrl: true
                }
            },
            _count: {
                select: {
                    reactions: true, // Đếm số lượng reactions
                    comments: true   // Đếm số lượng comments
                }
            },
            reactions: {
                // Chỉ lấy reaction của user này
                where: { userId: loggedInUserId || -1 }, // Dùng -1 để không bao giờ khớp nếu user là khách
                include: { reactionType: true } // Lấy cả tên của reaction
            }
        }
    });
};

const findById = (id, loggedInUserId) => {
    return prisma.artwork.findUnique({
        where: { id: parseInt(id), status: 'approved' },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    avatarUrl: true,
                    email: true
                }
            },
            _count: {
                select: {
                    reactions: true, // Đếm số lượng reactions
                    comments: true   // Đếm số lượng comments
                }
            },
            reactions: {
                // Chỉ lấy reaction của user này
                where: { userId: loggedInUserId || -1 }, // Dùng -1 để không bao giờ khớp nếu user là khách
                include: { reactionType: true } // Lấy cả tên của reaction
            }
        }
    });
};

const create = (data) => {
    return prisma.artwork.create({ data });
};

const update = (id, data) => {
    return prisma.artwork.update({
        where: { id: parseInt(id) },
        data
    });
};

const remove = (id) => {
    return prisma.artwork.delete({
        where: { id: parseInt(id) }
    });
};

//tìm tác phẩm nổi bật
const findFeatured = () => {
    return prisma.artwork.findMany({
        where: { status: 'approved' },
        orderBy: { createdAt: 'desc' },
        take: 5, // Chỉ lấy 5 tác phẩm
        include: {
            author: { select: { id: true, name: true, avatarUrl: true } },
            _count: {
                select: { reactions: true, comments: true }
            },
            reactions: {
                // Chỉ lấy reaction của user này
                where: { userId: loggedInUserId || -1 }, // Dùng -1 để không bao giờ khớp nếu user là khách
                include: { reactionType: true } // Lấy cả tên của reaction
            }
        }
    });
};

//tìm tác phẩm mới nhất
const findLatest = () => {
    return prisma.artwork.findMany({
        where: { status: 'approved' },
        orderBy: { createdAt: 'desc' },
        take: 5, // Chỉ lấy 5 tác phẩm
        include: {
            author: { select: { id: true, name: true, avatarUrl: true } },
            _count: { // <<< BỔ SUNG
                select: { reactions: true, comments: true }
            },
            reactions: {
                // Chỉ lấy reaction của user này
                where: { userId: loggedInUserId || -1 }, // Dùng -1 để không bao giờ khớp nếu user là khách
                include: { reactionType: true } // Lấy cả tên của reaction
            }
        }
    });
};
//admin 
//admin tìm các tác phẩm ở trạng thái chờ duêtj
const findByStatus = (status) => {
    return prisma.artwork.findMany({
        where: { status },
        orderBy: { createdAt: 'asc' },
        include: {
            author: { select: { id: true, name: true } }
        }
    });
};
//api duyệt haowcj từ chối
const updateStatus = (id, status) => {
    return prisma.artwork.update({
        where: { id: parseInt(id) },
        data: { status }
    });
};


//Tăng lượt xem
const incrementViewCount = (id) => {
    return prisma.artwork.update({
        where: { id: parseInt(id) },
        data: {
            views: {
                increment: 1 // hàm có sẵn của Prisma để tăng giá trị
            }
        }
    });
};

//kiểm tra xem loại reaction này có trong database không
const findReaction = (nameReaction) => {
    return prisma.reactionType.findUnique({ where: { name: nameReaction } })
}
// Thêm hoặc cập nhật một reaction
const upsertReaction = (userId, artworkId, reactionTypeId) => {
    return prisma.reaction.upsert({
        where: {
            userId_artworkId: { // Dùng khóa kết hợp
                userId: userId,
                artworkId: parseInt(artworkId)
            }
        },
        update: { // Nếu đã có reaction rồi thì chỉ cập nhật loại reaction
            reactionTypeId: reactionTypeId
        },
        create: { // Nếu chưa có thì tạo mới
            userId: userId,
            artworkId: parseInt(artworkId),
            reactionTypeId: reactionTypeId
        }
    });
};

// Xóa một reaction
const deleteReaction = (userId, artworkId) => {
    return prisma.reaction.delete({
        where: {
            userId_artworkId: {
                userId: userId,
                artworkId: parseInt(artworkId)
            }
        }
    });
};
module.exports = {
    findAllApproved,
    findById,
    create,
    update,
    remove,
    findFeatured,
    findLatest,
    findByStatus,
    updateStatus,
    upsertReaction,
    deleteReaction,
    findReaction,
    incrementViewCount
};