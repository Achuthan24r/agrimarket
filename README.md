🌾 AgriMarket – Full Stack MERN Application

AgriMarket is a full-stack web application that connects farmers and buyers.
Farmers can list agricultural products, and buyers can browse and purchase them.

Built using the MERN Stack:

MongoDB

Express.js

React.js

Node.js

🚀 Features
👨‍🌾 Farmers

Register & Login (JWT Authentication)

Add Products

View Own Products

Manage Listings

🛒 Buyers

View All Products

See Product Details

Simple and Clean UI

🏗 Project Structure
agrimarket/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

🛠 Backend Setup
1️⃣ Go to backend folder
cd backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Start backend
npm start


Server runs at:

http://localhost:5000

💻 Frontend Setup
1️⃣ Go to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start React app
npm start


App runs at:

http://localhost:3000

🔗 API Endpoints
🔐 Auth

POST /api/auth/register

POST /api/auth/login

📦 Products

GET /api/products

POST /api/products

GET /api/products/:id

🧪 Test Product API (Example)

POST request:

http://localhost:5000/api/products


Body (JSON):

{
  "name": "Tomato",
  "price": 40,
  "description": "Fresh organic tomatoes"
}

🗄 Database

MongoDB

Mongoose ODM

Stores users and products

🔐 Authentication

JWT Token based

Password hashed using bcrypt

📌 Tech Stack

Frontend:

React.js

Axios

React Router

Backend:

Node.js

Express.js

MongoDB

Mongoose

JWT

bcryptjs

🌟 Future Improvements

Payment Integration

Image Upload for Products

Admin Dashboard

Order Management

Deployment (Render / Vercel / Railway)

👨‍💻 Author

Achuthan Rameshkumar
