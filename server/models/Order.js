const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Delivered', 'Pending', 'Cancelled'],
        default: 'Pending'
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
