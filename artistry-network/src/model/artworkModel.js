// File: src/models/artwork.model.js
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const findAllApproved = () => {
    return prisma.artwork.findMany({
        where: { status: 'approved' },
        orderBy: { createdAt: 'desc' },
        include: {
            author: { select: { id: true, name: true, avatarUrl: true } }
        }
    });
};

const findById = (id) => {
    return prisma.artwork.findUnique({
        where: { id: parseInt(id) },
        include: {
            author: { select: { id: true, name: true, avatarUrl: true, email: true } },
            category: true,
            hashtags: { include: { hashtag: true } }
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

module.exports = {
    findAllApproved,
    findById,
    create,
    update,
    remove,
};