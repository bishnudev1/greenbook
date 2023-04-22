import express from 'express';
import { getData } from '../controllers/userController.js';

const router = express.Router();

router.route('/hello').get(getData);

export default router;