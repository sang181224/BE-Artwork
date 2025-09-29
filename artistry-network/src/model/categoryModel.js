const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

const createCategory = async (data) => {
    return prisma.category.create({ data });
}
const editCategory = async (data, id) => {
    return prisma.category.update({ where: { id }, data });
}
const deleteCategory = async (id) => {
    return prisma.category.delete({ where: { id } });
}
const getCategoryList = async () => {
    return prisma.category.findMany();
}
module.exports = {
    createCategory,
    editCategory,
    deleteCategory,
    getCategoryList
}