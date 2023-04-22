import express from 'express';
import { login, logout, myProfile, register } from '../controllers/userController.js';
import { Authentication } from '../middlewares/auth.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me').get(Authentication, myProfile);

export default router;