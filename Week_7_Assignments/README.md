# Week 7 Assignments - Full Stack Blog Application (MERN Stack)

**Deployed Application:** https://capstone-ashen-three.vercel.app/

This repository contains the Week 7 assignments and the major Capstone Project developed using the MERN Stack. The project demonstrates full stack development, authentication and authorization, JWT token security, protected routes, CRUD operations, role-based access control, Zustand state management, REST APIs, MongoDB integration, Cloudinary image uploads, middleware handling, and a modern React frontend.

---

## Project Structure

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
````

---

## Technologies Used

| Technology         | Purpose                  |
| ------------------ | ------------------------ |
| React.js           | Frontend Development     |
| Vite               | Fast Build Tool          |
| Node.js            | Backend Runtime          |
| Express.js         | REST API Framework       |
| MongoDB            | NoSQL Database           |
| Mongoose           | ODM for MongoDB          |
| JWT (jsonwebtoken) | Authentication           |
| Zustand            | State Management         |
| Axios              | API Requests             |
| bcryptjs           | Password Hashing         |
| cookie-parser      | Cookie Handling          |
| Cloudinary         | Image Upload and Storage |
| Multer             | File Upload Middleware   |
| CORS               | Cross-Origin Requests    |

---

## Key Features

* User Registration and Login
* JWT Authentication
* Role-Based Authorization
* Protected Routes
* CRUD Operations for Articles
* Comments System
* Soft Delete Articles
* Profile Image Upload with Cloudinary
* Zustand State Management
* Cookie-Based Authentication
* Modular Backend Architecture

---

## Roles Implemented

| Role   | Permissions                       |
| ------ | --------------------------------- |
| USER   | Read articles and add comments    |
| AUTHOR | Create, edit, and manage articles |
| ADMIN  | Administrative controls           |

---

## Frontend Development

The frontend is built using React.js and Vite with reusable components and protected routes.

### Main Components

| Component             | Purpose                  |
| --------------------- | ------------------------ |
| `Home.jsx`            | Landing page             |
| `Login.jsx`           | User login               |
| `Register.jsx`        | User registration        |
| `Articles.jsx`        | Display all articles     |
| `ArticleByID.jsx`     | Display a single article |
| `WriteArticles.jsx`   | Create new articles      |
| `EditArticle.jsx`     | Edit existing articles   |
| `AuthorProfile.jsx`   | Author dashboard         |
| `UserProfile.jsx`     | User dashboard           |
| `AdminProfile.jsx`    | Admin dashboard          |
| `ProtectedRoutes.jsx` | Route protection         |
| `Unauthorized.jsx`    | Access denied page       |
| `Header.jsx`          | Navigation header        |
| `Footer.jsx`          | Footer layout            |
| `RootLayout.jsx`      | Main application layout  |

---

## Zustand State Management

The project uses Zustand to manage authentication state globally.

### Features

* Login and logout handling
* Authentication persistence
* Session restoration
* Error management

---

## Backend Architecture

The backend follows a modular structure with separate APIs, models, middleware, and configuration files.

```bash
backend/
│
├── APIs/
│   ├── AdminAPI.js
│   ├── AuthorAPI.js
│   ├── CommonAPI.js
│   └── UserAPI.js
│
├── models/
│   ├── ArticleModel.js
│   └── UserModel.js
│
├── middlewares/
│   └── VerifyToken.js
│
├── config/
└── server.js
```

---

## Authentication and Authorization

The application uses:

* JWT Tokens
* HTTP-only Cookies
* Role-Based Middleware
* Protected Routes

### Security Features

* Password hashing using bcryptjs
* Token verification
* Role validation
* Session expiration handling

---

## User Model

| Field             | Description            |
| ----------------- | ---------------------- |
| `firstName`       | User first name        |
| `lastName`        | User last name         |
| `email`           | Unique email address   |
| `password`        | Hashed password        |
| `role`            | USER, AUTHOR, or ADMIN |
| `profileImageUrl` | Cloudinary image URL   |
| `isUserActive`    | Account status         |

---

## Article Model

| Field             | Description             |
| ----------------- | ----------------------- |
| `author`          | Reference to the author |
| `title`           | Article title           |
| `category`        | Article category        |
| `content`         | Article content         |
| `comments`        | Array of comments       |
| `isArticleActive` | Soft delete status      |

---

## API Modules

### Common API

Handles:

* User Registration
* Login
* Logout
* Authentication
* Password Hashing
* Profile Image Upload

### Author API

Handles:

* Create Articles
* Edit Articles
* View Own Articles
* Soft Delete Articles

### User API

Handles:

* View Active Articles
* Add Comments

### Admin API

Handles administrative operations and controls.

---

## CRUD Operations

| Operation            | HTTP Method |
| -------------------- | ----------- |
| Create               | POST        |
| Read                 | GET         |
| Update               | PUT         |
| Delete (Soft Delete) | PATCH       |

---

## File Upload and Cloudinary Integration

### Multer Usage

```javascript
upload.single("profileImageUrl")
```

### Features

* Image upload handling
* Cloud storage
* CDN-based delivery

---

## Comments System

Users can add comments to articles, and each comment is associated with the logged-in user.

---

## Cookie-Based Authentication

JWT tokens are stored securely in HTTP-only cookies to maintain user sessions.

---

## CORS Configuration

The backend enables cross-origin requests with credentials support to allow communication between the frontend and backend.

---

## Error Handling

Centralized error handling is implemented to manage:

* Validation errors
* Duplicate email errors
* Unauthorized access
* Server errors

---

## How to Run the Frontend

### 1. Navigate to the Frontend Folder

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

---

## How to Run the Backend

### 1. Navigate to the Backend Folder

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
PORT=2006
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the Server

```bash
node server.js
```

---

## API Testing

You can test the backend APIs using:

* Postman
* Thunder Client
* `.http` files included in the project:

  * `admin-req.http`
  * `author-req.http`
  * `user-req.http`

---

## Learning Outcomes

By completing this project, the following skills were strengthened:

* Full Stack MERN Development
* React Frontend Architecture
* REST API Design
* MongoDB CRUD Operations
* Authentication and Authorization
* JWT Token Handling
* Zustand State Management
* Protected Routes
* Cloudinary Image Upload
* Middleware Development
* Error Handling
* Cookie-Based Authentication

---

## Future Enhancements

Possible improvements include:

* Rich Text Editor
* Like and Bookmark System
* Notifications
* Admin Dashboard Analytics
* Dark Mode
* Article Search and Filters
* Pagination
* Real-Time Chat
* Production Deployment

---

## Author

**Sushanth Bandari**
Computer Science Engineering Student
Anurag University

---

## Summary

The Week 7 Capstone Project demonstrates:

* Full Stack MERN Development
* JWT Authentication
* Role-Based Authorization
* Zustand State Management
* CRUD Operations
* Protected Routes
* Cloudinary Integration
* REST API Design
* Modern React Development
* Scalable Full Stack Architecture

```
```
