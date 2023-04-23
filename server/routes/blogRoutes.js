import express from 'express';
import { createBlog, getAllBlogs, getBlog } from '../controllers/blogController.js';
import { Authentication } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express();


router.route('/blogs').get(getAllBlogs);
router.route('/blog/:id').get(getBlog);
router.route('/create-blog').post(Authentication, singleUpload, createBlog);

export default router;