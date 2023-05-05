import express from 'express';
import { deleteAccount, forgetPassword, login, logout, myProfile, register, resetPassword, updatePassword, updateProfile, updateProfilePicture } from '../controllers/userController.js';
import { Authentication } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(singleUpload, register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(Authentication, myProfile);
router.route('/update-profile').put(Authentication, updateProfile);
router.route('/forget-password').post(forgetPassword);
router.route('/reset-password/:token').put(resetPassword);
router.route('/change-password').put(Authentication, updatePassword);
router.route('/delete-account').post(Authentication, deleteAccount);
router.route('/update-dp').put(Authentication, singleUpload, updateProfilePicture);

export default router;