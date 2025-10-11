const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createComment = async (data) => {
    return await prisma.comment.create({ data });
}
const findCommentByUser = async (idUser, idArtwork) => {
    return await prisma.comment.findFirst({
        where: {
            authorId: idUser,
            artworkId: idArtwork,
            parentId: 0
        }
    });
}
const findUserCurrent = async (id) => {
    return await prisma.user.findUnique({ where: { id } })
}
const getCommentList = async () => {
    return await prisma.comment.findMany();
}
const findCommentById = async (id) => {
    return await prisma.comment.findUnique({
        where: { id }
    });
};
const removeComment = async (id) => {
    const childCommentsCount = await prisma.comment.count({
        where: { parentId: id },
    });
    if (childCommentsCount > 0) {
        return prisma.comment.update({
            where: { id },
            data: {
                content: 'Bình luận này đã bị xoá',
                isDeleted: true,
            },
        });
    } else {
        return prisma.comment.delete({
            where: { id },
        });
    }
};
module.exports = {
    createComment,
    findCommentByUser,
    findUserCurrent,
    getCommentList,
    findCommentById,
    removeComment
}