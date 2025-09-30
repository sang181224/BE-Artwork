const express = require('express');
const userController = require('../controller/userController');
const artworkController = require('../controller/artworkController');
const categoryController = require('../controller/categoryController');
const requireAuth = require('../middleware/requireAuth');
const optionalAuth = require('../middleware/optionalAuth');

const router = express.Router();
//auth
router.post('/register', userController.upload, userController.createMember);
router.post('/login', userController.loginMember);

//profile
router.get('/profiles/:id',optionalAuth, userController.getProfile);        
router.post('/:id/follow', requireAuth, userController.follow); //theo dõi, bỏ theo dõi
router.get('/profiles/:id/stats', userController.getProfileStats);
router.get('/profiles/:id/artworks', userController.getProfileArtworks);//Lấy các tác phẩm trong trong profile 
router.get('/profiles/:id/drafts', requireAuth, userController.getProfileDrafts); //lấy các tác phẩm ở trạng thái nháp, chờ duyệt

//follow


//artwork
router.get('/artwork', artworkController.getApprovedArtworks);
router.get('/artwork/:id', artworkController.getArtworkById);
// Route cần đăng nhập
router.post('/artwork/add', requireAuth, artworkController.upload, artworkController.createArtwork);

//category admin
router.post('/admin/category/add', requireAuth, categoryController.addCategory);
router.put('/admin/category/edit/:id', requireAuth, categoryController.editCategory);
router.delete('/admin/category/delete/:id', requireAuth, categoryController.deleteCategory);
router.get('/admin/category/list', categoryController.getCategoryList);
module.exports = router;