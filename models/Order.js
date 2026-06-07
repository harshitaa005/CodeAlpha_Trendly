// models/Order.js
// Orders ka data store karne ke liye schema

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Konse user ne order kiya
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Order mein kaunse products hain
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      name: String,      // Product ka naam (backup ke liye)
      price: Number,     // Price at time of order
      quantity: Number
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  // Delivery address
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  // Order ka status
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
