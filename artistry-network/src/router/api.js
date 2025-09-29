const express = require('express');
const multer = require('multer');
const userController = require('../controller/userController');
const artworkController = require('../controller/artworkController');
const categoryController = require('../controller/categoryController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
//auth
router.post('/register', userController.upload, userController.createMember);
router.post('/login', userController.loginMember);

//artwork
router.get('/artwork', artworkController.getApprovedArtworks);
router.get('/artwork/:id', artworkController.getArtworkById);
// Route cần đăng nhập
router.post('/addArtwork', requireAuth, artworkController.upload, artworkController.createArtwork);

//category admin
router.post('/admin/category/add', requireAuth, categoryController.addCategory);
router.put('/admin/category/edit/:id', requireAuth, categoryController.editCategory);
router.delete('/admin/category/delete/:id', requireAuth, categoryController.deleteCategory);
router.get('/admin/category/list', categoryController.getCategoryList);
module.exports = router;