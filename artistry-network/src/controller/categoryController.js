const categoryModel = require('../model/categoryModel');
const addCategory = async (req, res) => {
    const data = req.body;
    if (!data.name) {
        return res.status(400).json({ message: 'Vui lòng nhập name' });
    }
    const category = await categoryModel.createCategory(data);
    res.json(category);
}
const editCategory = async (req, res) => {
    const idCategory = parseInt(req.params.id);
    const data = req.body;
    if (!data.name) {
        return res.status(400).json({ message: 'Vui lòng nhập name' });
    }
    console.log(data);
    const category = await categoryModel.editCategory(data, idCategory);
    res.json({ message: 'Đã cập nhật thành công: ', category });
}
const deleteCategory = async (req, res) => {
    const idCategory = parseInt(req.params.id);
    await categoryModel.deleteCategory(idCategory);
    res.json({ message: 'Xoá thành công' });
}
const getCategoryList = async (req, res) => {
    const data = await categoryModel.getCategoryList();
    res.json(data);
}
module.exports = {
    addCategory,
    editCategory,
    deleteCategory,
    getCategoryList
}