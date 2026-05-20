````markdown
# Week 6 Assignments - React.js, MERN Stack and API Integration

**Deployed Application:** https://q31week-6.vercel.app/

This repository contains all Week 6 assignments and mini projects developed using React.js, Vite, Node.js, Express.js, MongoDB, and Mongoose. The assignments focus on React fundamentals, state management, form handling, API integration, CRUD operations, routing, Context API, and full-stack MERN development.

---

## Folder Structure

```bash
Week_6_Assignments/
│
├── mern-mini-app/
│   ├── backend/
│   └── frontend/
│
├── react-app-1/
├── react-app-2/
└── react-routing-demo/
````

---

## Technologies Used

| Technology  | Purpose                           |
| ----------- | --------------------------------- |
| React.js    | Frontend User Interface           |
| Vite        | Build Tool and Development Server |
| Node.js     | JavaScript Runtime                |
| Express.js  | Backend API Framework             |
| MongoDB     | NoSQL Database                    |
| Mongoose    | ODM for MongoDB                   |
| Context API | Global State Management           |
| CSS         | Styling                           |
| CORS        | Cross-Origin Resource Sharing     |

---

## Topics Covered

* React Fundamentals
* JSX and Components
* Props and State
* Event Handling
* Forms and Validation
* Hooks (`useState`, `useEffect`, `useRef`)
* Context API
* React Router
* API Integration
* REST APIs
* CRUD Operations
* MERN Stack Development
* MongoDB and Mongoose
* Backend Development with Express.js
* Error Handling

---

## React App 1

This project demonstrates core React concepts and form handling.

### Components Included

| Component          | Purpose                  |
| ------------------ | ------------------------ |
| `EditCounter1.jsx` | Counter update example   |
| `EditCounter2.jsx` | Counter logic demo       |
| `EditCounter3.jsx` | Advanced counter example |
| `EditCounter4.jsx` | Counter modification     |
| `FormDemo.jsx`     | Form handling            |
| `FormDemoSir.jsx`  | Form validation example  |
| `Product.jsx`      | Product component        |
| `RootLayout.jsx`   | Main layout component    |

### Concepts Demonstrated

* State updates using `useState`
* Event handling
* Dynamic rendering
* Controlled components
* Form validation
* Props usage

---

## React App 2

This project focuses on API integration and reusable components.

### Components Included

| Component          | Purpose           |
| ------------------ | ----------------- |
| `APIDemo.jsx`      | Fetch API example |
| `Counter.jsx`      | Counter component |
| `Footer.jsx`       | Footer layout     |
| `FormDemo.jsx`     | Form handling     |
| `Navbar.jsx`       | Navigation bar    |
| `TestRefTypes.jsx` | Ref handling      |
| `User.jsx`         | User component    |
| `UsersList.jsx`    | Dynamic user list |

### Concepts Demonstrated

* Fetch API
* `useEffect`
* `useRef`
* Dynamic rendering
* Reusable layouts

---

## React Routing Demo

This project demonstrates routing using React Router.

### Concepts Used

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `Outlet`

### Features

* Navigation between pages
* Nested routes
* Layout routes

---

## MERN Mini App

A complete MERN Stack mini project with frontend and backend integration.

### Project Structure

```bash
mern-mini-app/
│
├── backend/
│   ├── APIs/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── components/
    └── App.jsx
```

### Main Functionality

The application is an Employee Management System that performs full CRUD operations.

---

## Employee Schema

```javascript
const employeeSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  companyName: String
});
```

### Schema Features

* Automatic timestamps
* Validation support
* Strict schema enforcement

---

## Backend Features

* REST API development using Express.js
* MongoDB integration with Mongoose
* CRUD operations
* Centralized error handling
* Environment variables with `.env`
* CORS configuration

---

## CRUD Operations

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT         |
| Delete    | DELETE      |

---

## API Integration

Frontend communicates with backend APIs using:

* `fetch()`
* Axios
* REST endpoints

---

## Context API

The project demonstrates global state management using Context API to:

* Share data between components
* Avoid props drilling
* Manage application-wide state

---

## Responsive UI Concepts

Projects include:

* Responsive layouts
* Reusable components
* Modern UI structure

---

## How to Run React Projects

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

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
PORT=6987
DB_URL=your_mongodb_connection_string
```

### 4. Start the Server

```bash
node server.js
```

---

## Learning Outcomes

By completing these assignments, the following skills were strengthened:

* React Fundamentals
* Hooks Usage
* Form Handling
* API Integration
* CRUD Operations
* MERN Stack Development
* MongoDB Integration
* Express.js Backend Development
* REST APIs
* State Management
* Error Handling
* React Routing
* Context API

---

## Future Improvements

Possible enhancements include:

* Authentication System
* JWT Security
* Protected Routes
* Redux Toolkit
* File Uploads
* Pagination
* Search and Filters
* Admin Dashboard
* Deployment

---

## Author

**Sushanth Bandari**
Computer Science Engineering Student
Anurag University

---

## Summary

Week 6 assignments focused on:

* React.js Development
* MERN Stack Fundamentals
* Backend API Creation
* MongoDB CRUD Operations
* API Integration
* React Routing
* Context API
* Modern Frontend Development

```
```
