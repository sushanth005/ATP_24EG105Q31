````markdown
# Backend 2 - Express.js REST API with Authentication

This project is a backend application built using Node.js, Express.js, MongoDB, and Mongoose. It demonstrates REST API development, JWT authentication, middleware usage, password hashing, and CRUD operations for users and products.

---

## Project Structure

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

## Features

* REST API implementation
* User authentication using JWT
* Password hashing using bcrypt
* Protected routes
* CRUD operations
* MongoDB database integration
* Middleware usage
* Express Router
* Cookie-based authentication

---

## Technologies Used

* JavaScript (ES6)
* Node.js
* Express.js
* MongoDB
* Mongoose
* jsonwebtoken
* bcrypt
* cookie-parser

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd Backend_2
```

### 3. Install Dependencies

```bash
npm install
```

---

## Running the Server

```bash
node server.js
```

The server will start at:

```bash
http://localhost:3000
```

---

## User Model

The user schema includes the following fields:

| Field      | Type   | Validation                     |
| ---------- | ------ | ------------------------------ |
| `username` | String | Required, minimum 4 characters |
| `password` | String | Required                       |
| `email`    | String | Required, unique               |
| `age`      | Number | Optional                       |

### User Model Features

* Password hashing using bcrypt
* Email uniqueness validation
* Automatic timestamps

---

## Product Model

The product schema includes the following fields:

| Field         | Type   | Validation                          |
| ------------- | ------ | ----------------------------------- |
| `productId`   | Number | Required, unique                    |
| `productName` | String | Minimum 4 and maximum 12 characters |
| `price`       | Number | Minimum 10000 and maximum 50000     |
| `brand`       | String | Required                            |

### Product Model Features

* Schema validation
* Unique product IDs
* Automatic timestamps

---

## Authentication System

Authentication is implemented using:

* JWT tokens
* HTTP-only cookies
* Route-level middleware

### Login Workflow

1. Verify the user's email
2. Compare the entered password with the hashed password
3. Generate a JWT token
4. Store the token in an HTTP-only cookie
5. Access protected routes using the token

---

## Middleware

### verifyToken Middleware

This middleware performs the following checks:

* Verifies whether a token is present
* Validates the token
* Checks for token expiration

### Protected Route Example

```javascript
userApp.get("/users", verifyToken, async (req, res) => {
    let userslist = await UserModel.find();

    res.status(200).json({
        message: "users",
        payload: userslist
    });
});
```

---

## API Endpoints

### User APIs

| Method   | Endpoint      | Description               |
| -------- | ------------- | ------------------------- |
| `POST`   | `/users`      | Create a new user         |
| `POST`   | `/users/auth` | User login                |
| `GET`    | `/users`      | Get all users (Protected) |
| `GET`    | `/users/:id`  | Get user by ID            |
| `PUT`    | `/users/:id`  | Update user               |
| `DELETE` | `/users/:id`  | Delete user               |

### Product APIs

| Method   | Endpoint        | Description          |
| -------- | --------------- | -------------------- |
| `POST`   | `/products`     | Create a new product |
| `GET`    | `/products`     | Get all products     |
| `GET`    | `/products/:id` | Get product by ID    |
| `PUT`    | `/products/:id` | Update product       |
| `DELETE` | `/products/:id` | Delete product       |

---

## Password Hashing Example

```javascript
const hashedPassword = await hash(newUser.password, 12);
newUser.password = hashedPassword;
```

---

## JWT Token Generation Example

```javascript
const signedToken = sign(
    { email: user.email },
    "abcdef",
    { expiresIn: "1h" }
);
```

---

## Cookie Storage Example

```javascript
res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false
});
```

---

## HTTP Status Codes Used

| Status Code | Meaning               |
| ----------- | --------------------- |
| `200`       | Success               |
| `201`       | Created               |
| `400`       | Bad Request           |
| `401`       | Unauthorized          |
| `404`       | Not Found             |
| `500`       | Internal Server Error |

---

## Testing the APIs

You can test the API endpoints using:

* Postman
* Thunder Client
* `req.http`

---

## Concepts Covered

* REST APIs
* Authentication and Authorization
* Middleware
* MongoDB CRUD Operations
* Password Encryption
* JWT Authentication
* Express Routing
* Mongoose Validation
* Cookie Handling

---

## Author

**Sushanth Bandari**
Computer Science Engineering 
Anurag University

```
```
