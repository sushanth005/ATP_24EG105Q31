````md id="5uzw5t"
# Backend_2 - Express.js REST API with Authentication

This project is a backend application built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.  
It demonstrates REST API development, JWT authentication, middleware usage, password hashing, and CRUD operations for Users and Products.

---

# 📂 Project Structure

```bash
Backend_2/
│
├── API/
│   ├── productAPI.js
│   └── userAPI.js
│
├── auth/
│   └── auth.js
│
├── middlewares/
│   └── verifytoken.js
│
├── models/
│   ├── ProductModel.js
│   └── UserModel.js
│
├── server.js
├── req.http
├── package.json
├── package-lock.json
└── README.md
````

---

# 🚀 Features

* REST API implementation
* User Authentication using JWT
* Password Hashing using bcrypt
* Protected Routes
* CRUD Operations
* MongoDB Database Integration
* Middleware Usage
* Express Router
* Cookie-based Authentication

---

# 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* Cookie-parser

---

# 📦 Installation

## Step 1: Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2: Move into Project Folder

```bash
cd Backend_2
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

# ▶️ Run the Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:3000
```

---

# 📘 User Model

The user schema contains:

| Field    | Type   | Validation            |
| -------- | ------ | --------------------- |
| username | String | Required, Min 4 chars |
| password | String | Required              |
| email    | String | Required, Unique      |
| age      | Number | Optional              |

### Features

* Password hashing using bcrypt
* Email uniqueness validation
* Automatic timestamps

---

# 📘 Product Model

The product schema contains:

| Field       | Type   | Validation           |
| ----------- | ------ | -------------------- |
| productId   | Number | Required, Unique     |
| productName | String | Min 4, Max 12        |
| price       | Number | Min 10000, Max 50000 |
| brand       | String | Required             |

### Features

* Product validation
* Automatic timestamps
* Mongoose schema validation

---

# 🔐 Authentication System

Authentication is implemented using:

* JWT Tokens
* HTTP-only Cookies
* Route-level Middleware

### Login Process

1. Verify email
2. Compare password using bcrypt
3. Generate JWT token
4. Store token in cookies
5. Access protected routes

---

# 🧩 Middleware

## verifyToken Middleware

The middleware checks:

* Token availability
* Token validity
* Session expiration

### Protected Route Example

```js
userApp.get("/users", verifyToken, async(req, res)=>{
    let userslist = await UserModel.find()
    res.status(200).json({
        message:"users",
        payload: userslist
    });
});
```

---

# 📡 API Endpoints

# 👤 User APIs

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| POST   | `/users`      | Create new user           |
| POST   | `/users/auth` | User login                |
| GET    | `/users`      | Get all users (Protected) |
| GET    | `/users/:id`  | Get user by ID            |
| PUT    | `/users/:id`  | Update user               |
| DELETE | `/users/:id`  | Delete user               |

---

# 🛒 Product APIs

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/products`     | Create product    |
| GET    | `/products`     | Get all products  |
| GET    | `/products/:id` | Get product by ID |
| PUT    | `/products/:id` | Update product    |
| DELETE | `/products/:id` | Delete product    |

---

# 🔑 Password Hashing

Passwords are hashed using bcrypt before storing into database.

### Example

```js
const hashedPassword = await hash(newUser.password, 12);
newUser.password = hashedPassword;
```

---

# 🎟 JWT Token Generation

JWT tokens are generated during login.

### Example

```js
const signedToken = sign(
    {email: user.email},
    "abcdef",
    {expiresIn:"1h"}
);
```

---

# 🍪 Cookie Storage

JWT tokens are stored as HTTP-only cookies.

### Example

```js
res.cookie("token", signedToken, {
    httpOnly:true,
    sameSite:"lax",
    secure:false
});
```

---

# ⚡ HTTP Status Codes Used

| Status Code | Meaning      |
| ----------- | ------------ |
| 200         | Success      |
| 201         | Created      |
| 400         | Bad Request  |
| 401         | Unauthorized |
| 404         | Not Found    |
| 500         | Server Error |

---

# 🧪 Testing APIs

You can test APIs using:

* Postman
* Thunder Client
* req.http file

---

# 📚 Concepts Covered

* REST APIs
* Authentication
* Authorization
* Middleware
* MongoDB CRUD
* Password Encryption
* JWT Authentication
* Express Routing
* Mongoose Validation
* Cookies Handling

---

# 👨‍💻 Author

**Sushanth Bandari**
Computer Science Engineering Student
Anurag University

---

```
```
