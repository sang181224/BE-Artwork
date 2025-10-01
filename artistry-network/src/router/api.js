const express = require('express');
const userController = require('../controller/userController');
const artworkController = require('../controller/artworkController');
const categoryController = require('../controller/categoryController');
const requireAuth = require('../middleware/requireAuth');
const optionalAuth = require('../middleware/optionalAuth');
const requireAdmin = require('../middleware/requireAdmin');

const router = express.Router();
//auth
router.post('/register', userController.upload, userController.createMember);
router.post('/login', userController.loginMember);

//profile
router.get('/profiles/:id', optionalAuth, userController.getProfile);
router.post('/:id/follow', requireAuth, userController.follow); //theo dõi, bỏ theo dõi
router.get('/profiles/:id/stats', userController.getProfileStats);
router.get('/profiles/:id/artworks', userController.getProfileArtworks);//Lấy các tác phẩm trong trong profile 
router.get('/profiles/:id/drafts', requireAuth, userController.getProfileDrafts); //lấy các tác phẩm ở trạng thái nháp, chờ duyệt

//follow


//artwork
router.get('/artwork', artworkController.getApprovedArtworks);//lấy tác phẩm đã được duyệt của all
router.get('/artwork/detail/:id', artworkController.getArtworkById);//lấy chi tiết tác phẩm
router.get('/artwork/featured', artworkController.getFeaturedArtworks);
router.get('/artwork/latest', artworkController.getLatestArtworks)
// Route cần đăng nhập
router.post('/artwork/add', requireAuth, artworkController.upload, artworkController.createArtwork);

// ADMIN
//category admin
router.post('/admin/category/add', requireAuth, requireAdmin, categoryController.addCategory);
router.put('/admin/category/edit/:id', requireAuth, requireAdmin, categoryController.editCategory);
router.delete('/admin/category/delete/:id', requireAuth, requireAdmin, categoryController.deleteCategory);
router.get('/admin/category/list', categoryController.getCategoryList);

//artwork profile
//api lấy danh sách tác phẩm đang chờ duyệt
router.get('/admin/artworks/pending', requireAuth, requireAdmin, artworkController.getPendingArtworks);
//api duyệt tác phẩm
router.put('/admin/artworks/approve/:id', requireAuth, requireAdmin, artworkController.approveArtwork);
//api từ chối tác phẩm
router.put('/admin/artworks/reject/:id', requireAuth, requireAdmin, artworkController.rejectArtwork);
module.exports = router;