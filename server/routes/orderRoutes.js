import express from 'express';
import { orderPlant, verifyPayment } from '../controllers/orderController.js';
import { Authentication } from '../middlewares/auth.js';

const router = express.Router();

router.route('/order-plant').post(Authentication, orderPlant);
router.route('/order-verification').post(Authentication, verifyPayment);

router.route('/dummy-api').get(Authentication, (req, res) => {
    res.json({
        success: true,
        message: "Authentication is working..."
    })
});

export default router;