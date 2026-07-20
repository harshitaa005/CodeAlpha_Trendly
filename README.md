# 🛍️ Trendly - Online Store
A modern and elegant ecommerce web application built with Node.js, Express, and MongoDB.

## ✨ Features
- 🔐 User Authentication (Register & Login)
- 🛒 Add to Cart & Place Orders
- 🔍 Search Products in Real Time
- 📂 Filter by Category & Sort Products
- 📱 Fully Responsive Design
- 🎨 Clean & Minimal Brown/Beige UI Theme
- Learning pull request

## 🛠️ Tech Stack
| Frontend | Backend | Database |
|----------|---------|----------|
| HTML, CSS, JavaScript | Node.js, Express.js | MongoDB |

## 🚀 How to Run Locally

### Step 1 — Download & Extract
Download the ZIP file from the repository and extract it on your computer.

### Step 2 — Install Node.js & MongoDB
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition)

### Step 3 — Install Dependencies
Open terminal inside the extracted project folder and run:
```bash
npm install
```

### Step 4 — Start MongoDB
Open a new terminal and run:
```bash
mongod
```

### Step 5 — Start the Server
```bash
node server.js
```

Then open your browser and visit:
```
http://localhost:3000
```

## 📂 Project Structure
```
trendly/
├── public/
│   ├── index.html       # Shop Page
│   ├── auth.html        # Login & Register
│   ├── cart.html        # Cart Page
│   ├── product.html     # Product Detail
│   └── style.css        # Styling
├── routes/
│   ├── auth.js          # Auth Routes
│   ├── products.js      # Product Routes
│   └── orders.js        # Order Routes
├── server.js            # Main Server File
└── package.json
```

## 👩‍💻 Developed By
**Harshita** — CodeAlpha Internship Project
