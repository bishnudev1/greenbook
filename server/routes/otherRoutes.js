import express from 'express';
import { sendMsg } from '../controllers/otherController.js';

const router = express.Router();

router.route('/contact').post(sendMsg);


export default router;