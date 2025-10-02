const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createMessage = (data) => {
    return prisma.message.create({
        data: {
            content: data.content,
            senderId: data.senderId,
            receiverId: data.receiverId,
        },
        include: {
            sender: { select: { id: true, name: true, avatarUrl: true } },
            receiver: { select: { id: true, name: true, avatarUrl: true } },
        }
    });
};

const getConversation = (userId1, userId2) => {
    return prisma.message.findMany({
        where: {
            OR: [
                { senderId: userId1, receiverId: userId2 },
                { senderId: userId2, receiverId: userId1 },
            ]
        },
        orderBy: {
            createdAt: 'asc'
        },
        include: {
            sender: { select: { id: true, name: true, avatarUrl: true } }
        }
    });
};

module.exports = {
    createMessage,
    getConversation,
};
