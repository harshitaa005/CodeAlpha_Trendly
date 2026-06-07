// =============================================
//   Simple E-Commerce Server - server.js
//   Tech: Express.js + MongoDB (Mongoose)
// =============================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// ---- Middleware ----
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---- MongoDB Connection ----
// MongoDB Compass se connect karne ke liye apna connection string daalo
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_db';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB! (ecommerce_db)');
    seedProducts(); // 
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err.message);
  });

// ---- Routes Import ----
const authRoutes     = require('./routes/auth');
const productRoutes  = require('./routes/products');
const orderRoutes    = require('./routes/orders');

app.use('/api/auth',     authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders',   orderRoutes);

// ---- Seed Products (First Time Only) ----
const Product = require('./models/Product');

async function seedProducts() {
  const count = await Product.countDocuments();
  if (count > 0) return; // Already seeded

  const sampleProducts = [
    {
      name: 'Nike Running Shoes',
      description: 'Lightweight aur comfortable running shoes, daily use ke liye best.',
      price: 2999,
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      stock: 15
    },
    {
      name: 'Wireless Bluetooth Earbuds',
      description: '10 ghante battery life, noise cancellation ke saath premium sound.',
      price: 1499,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
      stock: 30
    },
    {
      name: 'Men\'s Cotton T-Shirt',
      description: 'Soft 100% cotton fabric, casual wear ke liye perfect.',
      price: 499,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      stock: 50
    },
    {
      name: 'Stainless Steel Water Bottle',
      description: '24 ghante cold aur 12 ghante hot rakhta hai. 750ml capacity.',
      price: 799,
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
      stock: 25
    },
    {
      name: 'Laptop Backpack',
      description: '15.6 inch laptop fit hoga, USB charging port bhi hai.',
      price: 1299,
      category: 'Bags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      stock: 20
    },
    {
      name: 'Smart Watch',
      description: 'Heart rate monitor, steps counter, notifications - sab kuch ek watch mein.',
      price: 3499,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      stock: 10
    },
    {
      name: 'Sunglasses UV400',
      description: 'UV protection ke saath stylish sunglasses, summer must-have.',
      price: 699,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      stock: 40
    },
    {
      name: 'Yoga Mat',
      description: 'Non-slip 6mm thick yoga mat, gym aur home workout ke liye.',
      price: 899,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1601925228013-f6951d2b3aa4?w=400',
      stock: 18
    }
  ];

  await Product.insertMany(sampleProducts);
  console.log('📦 Sample products have been added to the MongoDB database!');
}

// ---- Start Server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 The server is running: http://localhost:${PORT}`);
  console.log(`📂 Check it in Mongodb compass: ecommerce_db`);
});
