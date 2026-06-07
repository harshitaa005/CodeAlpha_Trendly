// routes/products.js
// Products ke liye API routes

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ---- SAARE PRODUCTS LAAO ----
// GET /api/products
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let filter = {};

    // Category filter
    if (category && category !== 'All') {
      filter.category = category;
    }

    // Search filter
    if (search) {
      filter.name = { $regex: search, $options: 'i' }; // Case insensitive search
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);

  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});

// ---- EK PRODUCT KI DETAIL ----
// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product nahi mila!' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});

// ---- SAARI CATEGORIES ----
// GET /api/products/meta/categories
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json(['All', ...categories]);
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error.message });
  }
});

module.exports = router;
