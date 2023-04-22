import express from 'express';
import { login, logout, myProfile, register } from '../controllers/userController.js';
import { Authentication } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(singleUpload, register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(Authentication, myProfile);

export default router;