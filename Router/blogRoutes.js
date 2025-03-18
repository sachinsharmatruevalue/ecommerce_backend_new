const express = require('express');
const blogController = require('../Controller/blogController');
const { isAuth ,isAdmin } = require('../Util/auth');
const multer = require('../Util/Multer');

const router = express.Router();

// Auth routes *****************************************************************
router.get('/slug/:slug',blogController.getBlogBySlug)
router.get('/web',blogController.getAllWebBlogs);
  router
  .route('/')
  .get(isAuth,blogController.getAllBlog)
  .post(isAdmin,multer.singleFileUpload,blogController.createBlog)
  router
  .route('/:id')
  .get(blogController.getBlog)
  .delete(isAdmin,blogController.deleteBlog)
  .patch(isAdmin,multer.singleFileUpload,blogController.updateBlog)

module.exports = router;