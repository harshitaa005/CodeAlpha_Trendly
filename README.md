# 🛍️ ShopKaro - Simple E-Commerce Project

## Student Project | Express.js + MongoDB + HTML/CSS/JS

---

## 📁 Project Structure
```
ecommerce/
├── server.js              ← Main server file
├── package.json           ← Dependencies list
├── .env                   ← Environment variables
├── models/
│   ├── User.js            ← User schema (MongoDB)
│   ├── Product.js         ← Product schema
│   └── Order.js           ← Order schema
├── routes/
│   ├── auth.js            ← Login/Register API
│   ├── products.js        ← Products API
│   └── orders.js          ← Orders API
└── public/
    ├── landing.html       ← Pehla page (homepage)
    ├── auth.html          ← Login / Register page
    ├── index.html         ← Shop page (products)
    ├── product.html       ← Product detail page
    ├── cart.html          ← Cart + Order page
    └── style.css          ← Poora CSS
```

---

## 🚀 Setup Kaise Karein (Step by Step)

### Step 1: Prerequisites
- Node.js install hona chahiye (nodejs.org se download karo)
- MongoDB install hona chahiye (mongodb.com se)
- MongoDB Compass install karo (GUI tool)

### Step 2: Project folder mein jao
```bash
cd ecommerce
```

### Step 3: Dependencies install karo
```bash
npm install
```

### Step 4: MongoDB start karo
- Windows pe MongoDB service automatically start hoti hai
- Ya Command Prompt mein type karo: `mongod`

### Step 5: Server start karo
```bash
npm start
```
Ya development mode mein (auto-restart):
```bash
npm run dev
```

### Step 6: Browser mein kholo
```
http://localhost:5000/landing.html
```

---

## 🔍 MongoDB Compass Se Connect Karna

1. MongoDB Compass open karo
2. "New Connection" pe click karo
3. URI mein ye daalo: `mongodb://localhost:27017`
4. "Connect" karo
5. Left side mein `ecommerce_db` database dikhegi
6. Andar 3 collections honge:
   - `users` - registered users
   - `products` - products (auto-add hote hain)
   - `orders` - placed orders

---

## 🌐 API Endpoints

### Auth
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/register | Naya user register karo |
| POST | /api/auth/login | Login karo |

### Products
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/products | Saare products |
| GET | /api/products/:id | Ek product ki detail |
| GET | /api/products/meta/categories | Saari categories |

### Orders
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/orders | Order place karo (login required) |
| GET | /api/orders/my-orders | Mera order history |

---

## 📱 Pages Flow

```
landing.html → auth.html → index.html → product.html
                                    ↘→ cart.html
```

---

## 🛠️ Technologies Used

- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT (JSON Web Tokens) + bcrypt
- **Frontend**: Pure HTML + CSS + Vanilla JavaScript
- **Fonts**: Baloo 2 + Hind (Google Fonts)
- **Icons**: Font Awesome

---

Made with ❤️ | Student Project 2024
