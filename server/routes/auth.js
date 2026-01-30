const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // In a real app, check DB. 
    // For migration demo, we'll mimic the static site logic + DB check if User exists

    if (username === 'chandruksnh2z@gmail.com' && password === '123456') {
        return res.json({ message: 'Login successful', user: { username: 'admin' } });
    }

    return res.status(401).json({ message: 'Invalid username or password' });
});

module.exports = router;
