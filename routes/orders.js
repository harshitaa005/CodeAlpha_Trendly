// routes/orders.js
// Orders ke liye API routes

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'mera_secret_key_123';

// ---- Auth Middleware ----
// Ye check karta hai ki user logged in hai ya nahi
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: 'Pehle login karo!' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: 'Token invalid hai, dobara login karo!' });
  }
}

// ---- ORDER PLACE KARO ----
// POST /api/orders
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart khali hai!' });
    }

    // Total calculate karo aur items validate karo
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product nahi mila: ${item.productId}` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `${product.name} ka stock kam hai!` });
      }

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
      });

      totalAmount += product.price * item.quantity;

      // Stock update karo
      product.stock -= item.quantity;
      await product.save();
    }

    // Order save karo
    const order = new Order({
      user: req.userId,
      items: orderItems,
      totalAmount,
      shippingAddress,
      status: 'Pending'
    });

    await order.save();

    res.status(201).json({
      message: 'Order place ho gaya! 🎉',
      orderId: order._id,
      totalAmount,
      status: order.status
    });

  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});

// ---- MERA ORDER HISTORY ----
// GET /api/orders/my-orders
router.get('/my-orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate('items.product', 'name image')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});

module.exports = router;
