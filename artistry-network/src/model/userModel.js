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
module.exports = {
    createUser,
    checkEmail,
    checkLoginUser,
    getUserById,
    updateUserById,
}