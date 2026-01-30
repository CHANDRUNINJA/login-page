const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET /api/dashboard/stats
router.get('/stats', (req, res) => {
    // Mock data for now, ideally fetch from DB
    res.json({
        sales: 245000,
        orders: 1245,
        customers: 865,
        products: 320
    });
});

// GET /api/dashboard/orders
router.get('/orders', async (req, res) => {
    // Mock data to match HTML
    const orders = [
        { orderId: '#1023', customer: 'Rahul', product: 'iPhone 13', status: 'Delivered', amount: 65000 },
        { orderId: '#1024', customer: 'Anita', product: 'MacBook Air', status: 'Pending', amount: 92000 },
        { orderId: '#1025', customer: 'Karthik', product: 'AirPods', status: 'Cancelled', amount: 18000 }
    ];
    res.json(orders);
});

module.exports = router;
