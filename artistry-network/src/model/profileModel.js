const { PrismaClient} = require('../generated/client');
const prisma = new PrismaClient();
const follow = (followerId, followingId) => {
    return prisma.follows.create({
        data: { followerId, followingId }
    });
};

const unfollow = (followerId, followingId) => {
    return prisma.follows.delete({
        where: {
            followerId_followingId: { followerId, followingId }
        }
    });
};

module.exports = {
    // ...
    follow,
    unfollow,
};