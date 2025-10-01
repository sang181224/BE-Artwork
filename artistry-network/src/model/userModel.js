const bcryptjs = require('bcryptjs');
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createUser = async (data) => {
    console.log("Dữ liệu client là: ", data);
    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            avatarUrl: data.avatar,
            roleId: data.roleId
        }
    });
}
const checkEmail = async (data) => {
    let existingUser;
    if (!data.id) {
        existingUser = await prisma.user.findFirst({
            where: {
                email: data.email
            },
        });
    } else {
        existingUser = await prisma.user.findFirst({
            where: {
                email: data.email,
                id: { not: data.id }
            },
        });
    }

    const errors = {};
    if (existingUser) {
        errors.email = 'email đã tồn tại';
    }
    return errors;
}
const checkLoginUser = async (data) => {
    const existingUser = await prisma.user.findFirst({
        where: {
            email: data.email,
        },
    });
    if (!existingUser) {
        return false;
    }
    const passwordMatch = await bcryptjs.compare(data.password, existingUser.password);
    if (!passwordMatch) {
        return false;
    }
    return existingUser;
}
const getUserById = async (id) => {
    return await prisma.user.findUnique({ where: { id }, include: { country: true } });
}
const updateUserById = async (data, id) => {
    return await prisma.user.update({ where: { id }, data })
}
// const findProfileById = async (profileId, loggedInUserId) => {
//     const id = parseInt(profileId);

//     // 1. Lấy thông tin cơ bản của chủ nhân hồ sơ
//     const profileUser = await prisma.user.findUnique({
//         where: { id },
//         include: {
//             role: true, // Lấy cả thông tin về Quyền
//         }
//     });

//     if (!profileUser) {
//         return null; // Không tìm thấy user
//     }

//     // 2. Lấy danh sách tác phẩm đã được duyệt
//     const approvedArtworks = await prisma.artwork.findMany({
//         where: {
//             authorId: id,
//             status: 'approved'
//         },
//         include: { author: true }
//     });

//     // 3. Kiểm tra xem người xem có phải chủ nhân không
//     const isOwner = loggedInUserId === id;
//     let drafts = [];

//     // 4. Nếu là chủ nhân, lấy thêm danh sách bản nháp
//     if (isOwner) {
//         drafts = await prisma.artwork.findMany({
//             where: {
//                 authorId: id,
//                 status: {
//                     in: ['draft', 'pending', 'rejected']
//                 }
//             }
//         });
//     }

//     // 5. Gom tất cả dữ liệu lại và trả về
//     return {
//         isOwner,
//         profile: {
//             id: profileUser.id,
//             name: profileUser.name,
//             avatarUrl: profileUser.avatarUrl,
//             createdAt: profileUser.createdAt,
//             bio: profileUser.bio,
//             skills: profileUser.skills,
//             // ... có thể thêm các thống kê followers ở đây
//         },
//         tabs: {
//             artworks: approvedArtworks,
//             drafts: drafts, // Sẽ là mảng rỗng nếu không phải chủ nhân
//             // ... các tab khác
//         }
//     };
// };

//Láy thông tin cơ bản của user
const findBasicProfileById = (id) => {
    return prisma.user.findUnique({
        where: { id: parseInt(id) },
        select: {
            id: true,
            name: true,
            avatarUrl: true,
            coverPhotoUrl: true,
            bio: true,
            skills: true
        }
    });
};

//thống kê
const getStatsById = async (id) => {
    const userId = parseInt(id);

    const [artworkCount, followersCount, followingCount] = await Promise.all([
        // Đếm số tác phẩm đã duyệt
        prisma.artwork.count({
            where: { authorId: userId, status: 'approved' }
        }),
        // Đếm số người theo dõi mình
        prisma.follows.count({
            where: { followingId: userId }
        }),
        // Đếm số người mình đang theo dõi
        prisma.follows.count({
            where: { followerId: userId }
        })
    ]);

    return {
        artworks: artworkCount,
        followers: followersCount,
        following: followingCount
    };
};
const followUser = (followerId, followingId) => {
    return prisma.follows.create({
        data: {
            followerId: followerId,
            followingId: followingId
        }
    });
};
//lấy tác phẩm đã được duyệt
const findApprovedArtworksByAuthor = (authorId) => {
    return prisma.artwork.findMany({
        where: {
            authorId: parseInt(authorId),
            status: 'approved'
        },
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
            }
        }
    });
};
const findNonPublicArtworksByAuthor = (authorId) => {
    return prisma.artwork.findMany({
        where: {
            authorId: parseInt(authorId),
            status: { in: ['draft', 'pending', 'rejected'] }
        },
        orderBy: { updatedAt: 'desc' }
    });
};
module.exports = {
    createUser,
    checkEmail,
    checkLoginUser,
    getUserById,
    updateUserById,
    followUser,
    findBasicProfileById,
    getStatsById,
    findApprovedArtworksByAuthor,
    findNonPublicArtworksByAuthor
}