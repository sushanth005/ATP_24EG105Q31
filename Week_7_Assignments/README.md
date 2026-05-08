# 🚀 Week-7 Assignments - Full Stack Blog Application (MERN Stack)

This repository contains the Week-7 assignments and the major **Capstone Project** developed using the MERN Stack.

Frontend Deployed Link: https://blog-app-beryl-nu.vercel.app/
Backend Deployed Link: https://atp-24eg105q31.onrender.com

The project demonstrates:

- Full Stack Development
- Authentication & Authorization
- JWT Token Security
- Protected Routes
- CRUD Operations
- Role-Based Access Control
- Zustand State Management
- REST APIs
- MongoDB Integration
- Cloudinary Image Upload
- Middleware Handling
- Modern React Frontend

---

# 📂 Project Structure

```bash
Week_7_Assignments/
│
├── Capstone-Project/
│   ├── backend/
│   ├── frontend/
│   ├── admin-req.http
│   ├── author-req.http
│   ├── user-req.http
│   └── server.js
```

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Development |
| Vite | Fast Build Tool |
| Node.js | Backend Runtime |
| Express.js | REST APIs |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Zustand | State Management |
| Axios | API Requests |
| bcryptjs | Password Hashing |
| Cookie Parser | Cookie Handling |
| Cloudinary | Image Upload |
| Multer | File Upload Middleware |
| CORS | Cross-Origin Requests |

---

# 📚 Topics Covered

---

# ⚛ Frontend Development

- React Components
- Hooks
- Routing
- Forms
- API Integration
- Protected Routes
- Zustand Store
- Authentication
- Role-Based UI

---

# 🌐 Backend Development

- Express APIs
- MongoDB CRUD
- JWT Authentication
- Middleware
- Authorization
- File Upload
- Cloudinary Integration
- REST APIs

---

# 🔐 Authentication Concepts

- JWT Tokens
- Cookie-Based Authentication
- Role Validation
- Protected APIs
- Session Handling

---

# 👥 Roles Implemented

The application supports 3 user roles:

| Role | Access |
|------|---------|
| USER | Read articles & comment |
| AUTHOR | Create & manage articles |
| ADMIN | Administrative controls |

---

# 📂 Frontend Components

The frontend contains multiple reusable React components.

---

# 🧩 Components Included

| Component | Purpose |
|------------|----------|
| `AdminProfile.jsx` | Admin Dashboard/Profile |
| `ArticleByID.jsx` | Display Single Article |
| `Articles.jsx` | Display All Articles |
| `AuthorArticles.jsx` | Author's Articles |
| `AuthorProfile.jsx` | Author Dashboard |
| `EditArticle.jsx` | Edit Existing Article |
| `Footer.jsx` | Footer Layout |
| `Header.jsx` | Navigation Header |
| `Home.jsx` | Landing Page |
| `Login.jsx` | User Login |
| `ProtectedRoutes.jsx` | Route Protection |
| `Register.jsx` | User Registration |
| `RootLayout.jsx` | Main Layout |
| `Unauthorized.jsx` | Unauthorized Access Page |
| `UserProfile.jsx` | User Dashboard |
| `WriteArticles.jsx` | Create Articles |

---

# 🏠 Home Component

The Home component acts as the landing page.

## Features

- Displays application overview
- Navigation links
- Responsive layout

---

# 🔑 Login Component

Handles user authentication.

## Features

- Email & Password Login
- JWT Authentication
- Cookie Storage
- Role-Based Access

---

## Example Login Flow

```jsx
axios.post("/auth/login", userCred)
```

### Explanation

| Function | Purpose |
|----------|----------|
| axios.post() | Sends login request |
| userCred | User credentials |
| JWT Token | Authentication token |

---

# 📝 Register Component

Allows users to create accounts.

## Features

- Form Validation
- Profile Image Upload
- Password Hashing
- Role Selection

---

# ✍ Write Articles Component

Used by authors to publish articles.

## Features

- Create Article
- Category Selection
- Rich Content Handling
- Protected Route Access

---

# 📖 ArticleByID Component

Displays full article details.

## Features

- Article Content
- Comments Section
- Dynamic Rendering

---

# 🛡 Protected Routes

The project uses protected routes for authentication.

## Example

```jsx
<Route
  path="/profile"
  element={
    <ProtectedRoutes>
      <UserProfile />
    </ProtectedRoutes>
  }
/>
```

### Purpose

- Prevents unauthorized access
- Validates login status
- Protects private pages

---

# 🧠 Zustand State Management

The project uses Zustand for authentication state management.

## File

`authStore.js` :contentReference[oaicite:0]{index=0}

---

# ⚡ Zustand Features

- Login State
- Authentication Persistence
- Logout Handling
- Error Management
- Session Restore

---

# 🔑 Login Function Explanation

```js
login: async (userCred) => {
```

### Purpose

Authenticates user credentials.

---

## API Request

```js
axios.post("http://localhost:2006/auth/login")
```

### Explanation

- Sends login request to backend
- Stores JWT token in cookies
- Updates global authentication state

---

# 🔄 checkAuth Function

```js
checkAuth: async () => {
```

### Purpose

Restores authentication on page refresh.

---

# 🌐 Backend Architecture

The backend follows modular architecture.

---

# 📂 Backend Structure

```bash
backend/
│
├── APIs/
├── models/
├── middlewares/
├── config/
└── server.js
```

---

# 📦 APIs Included

| API File | Purpose |
|----------|----------|
| `AdminAPI.js` | Admin Operations |
| `AuthorAPI.js` | Author Operations |
| `CommonAPI.js` | Login/Register |
| `UserAPI.js` | User Operations |

---

# 🔐 Authentication API

Authentication APIs are defined in:

`CommonAPI.js` :contentReference[oaicite:1]{index=1}

---

# 📌 Features in CommonAPI

- Register User
- Login User
- Logout
- JWT Authentication
- Password Hashing
- Image Upload
- Session Validation

---

# 🔒 Password Hashing

```js
newUser.password = await hash(newUser.password, 12);
```

### Explanation

| Function | Purpose |
|----------|----------|
| hash() | Encrypts password |
| 12 | Salt rounds |

---

# 🔑 JWT Token Generation

```js
const signedToken = sign(
  {
    id:user._id,
    email:email,
    role:user.role
  },
  process.env.SECRET_KEY,
  {expiresIn:"6h"}
)
```

### Explanation

- Creates secure authentication token
- Stores user data
- Token expires after 6 hours

---

# 🍪 Cookie Authentication

```js
res.cookie("token", signedToken)
```

### Purpose

Stores JWT securely in browser cookies.

---

# 🛡 Verify Token Middleware

Authentication middleware is implemented in:

`VerifyToken.js` :contentReference[oaicite:2]{index=2}

---

# ⚡ Middleware Features

- Token Verification
- Role Validation
- Authorization
- Session Expiry Handling

---

# 🔐 Role Validation

```js
if(!allowedRoles.includes(decodedToken.role))
```

### Purpose

Restricts unauthorized access.

---

# 👨‍💻 Author APIs

Author routes are implemented in:

`AuthorAPI.js` :contentReference[oaicite:3]{index=3}

---

# ✍ Author Features

- Create Articles
- Edit Articles
- Delete Articles
- Read Own Articles

---

# 📝 Create Article API

```js
authorApp.post("/articles")
```

### Purpose

Allows authors to publish articles.

---

# ✏ Update Article API

```js
authorApp.put("/article")
```

### Features

- Updates article content
- Validates author ownership
- Prevents unauthorized editing

---

# 🗑 Soft Delete Feature

```js
authorApp.patch("/article")
```

### Purpose

Temporarily disables article instead of permanent deletion.

---

# 👤 User APIs

User APIs are implemented in:

`UserAPI.js` :contentReference[oaicite:4]{index=4}

---

# 📚 User Features

- Read Articles
- Add Comments
- View Content

---

# 💬 Add Comment API

```js
articleDocument.comments.push({
  user:userIdOfToken,
  comment:comment
})
```

### Explanation

- Adds comment to article
- Links comment with logged-in user

---

# 🗄 Article Schema

Defined in:

`ArticleModel.js` :contentReference[oaicite:5]{index=5}

---

# 📘 Article Fields

| Field | Purpose |
|------|----------|
| author | Article Author |
| title | Article Title |
| category | Article Category |
| content | Article Content |
| comments | User Comments |
| isArticleActive | Soft Delete Status |

---

# 💬 Comment Schema

```js
comments:[{type: commentSchema,default:[]}]
```

### Purpose

Stores article comments dynamically.

---

# 👤 User Schema

Defined in:

`UserModel.js` :contentReference[oaicite:6]{index=6}

---

# 📘 User Schema Fields

| Field | Purpose |
|------|----------|
| firstName | User First Name |
| lastName | User Last Name |
| email | User Email |
| password | Encrypted Password |
| role | USER/AUTHOR/ADMIN |
| profileImageUrl | Cloudinary Image |
| isUserActive | Account Status |

---

# 🌐 Backend Server

Defined in:

`server.js` :contentReference[oaicite:7]{index=7}

---

# ⚡ Server Features

- Express Server
- MongoDB Connection
- Middleware Integration
- Route Handling
- Error Handling

---

# 🔌 Database Connection

```js
await connect(process.env.DB_URL);
```

### Purpose

Connects backend to MongoDB database.

---

# 🌍 CORS Configuration

```js
app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true,
}))
```

### Purpose

Allows frontend to communicate with backend.

---

# ⚠ Error Handling Middleware

The project includes centralized error handling.

---

# 🔴 Validation Error Handling

```js
if (err.name === "ValidationError")
```

### Purpose

Handles invalid data errors.

---

# 🔴 Duplicate Email Handling

```js
if (errCode === 11000)
```

### Purpose

Prevents duplicate account creation.

---

# ☁ Cloudinary Integration

Used for profile image uploads.

## Features

- Cloud Image Storage
- CDN URLs
- Fast Image Delivery

---

# 📤 Multer File Upload

```js
upload.single("profileImageUrl")
```

### Purpose

Handles image uploads from frontend.

---

# 🔄 CRUD Operations Covered

| Operation | Method |
|-----------|---------|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | PATCH |

---

# 🔐 Security Features

The project implements:

✅ Password Hashing  
✅ JWT Authentication  
✅ Protected APIs  
✅ Role-Based Access  
✅ Cookie Authentication  
✅ Authorization Middleware

---

# 🎯 Key Learning Outcomes

By completing this project, the following concepts were learned:

✅ Full Stack MERN Development  
✅ React Frontend Architecture  
✅ REST API Design  
✅ MongoDB CRUD Operations  
✅ Authentication & Authorization  
✅ JWT Token Handling  
✅ Zustand State Management  
✅ Protected Routes  
✅ Cloudinary Image Upload  
✅ Middleware Development  
✅ Error Handling  
✅ Cookie Authentication

---

# 🚀 How to Run Frontend

---

# Step 1

Move to frontend folder

```bash
cd frontend
```

---

# Step 2

Install dependencies

```bash
npm install
```

---

# Step 3

Start React app

```bash
npm run dev
```

---

# 🚀 How to Run Backend

---

# Step 1

Move to backend folder

```bash
cd backend
```

---

# Step 2

Install dependencies

```bash
npm install
```

---

# Step 3

Create `.env` file

```env
PORT=2006
DB_URL=your_mongodb_url
SECRET_KEY=your_secret_key
```

---

# Step 4

Run server

```bash
node server.js
```

---

# 📦 Backend Dependencies

The backend uses the following major packages:

- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv
- cookie-parser
- cloudinary
- multer

Dependencies listed in `package-lock.json` :contentReference[oaicite:8]{index=8}

---

# 🔮 Future Enhancements

Possible improvements:

- Rich Text Editor
- Like System
- Bookmark Articles
- Notifications
- Admin Dashboard Analytics
- Dark Mode
- Article Search
- Pagination
- Real-Time Chat
- Deployment

---

# 👨‍💻 Author

## Sushanth Bandari

Computer Science Engineering Student  
Anurag University

---

# ⭐ Project Summary

The Week-7 Capstone Project demonstrates:

✅ MERN Stack Development  
✅ JWT Authentication  
✅ Role-Based Authorization  
✅ Zustand State Management  
✅ CRUD Operations  
✅ Protected Routes  
✅ Cloudinary Integration  
✅ REST APIs  
✅ Full Stack Architecture  
✅ Modern React Development

---
