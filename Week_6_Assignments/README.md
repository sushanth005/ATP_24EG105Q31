🚀 Week-6 Assignments - React.js, MERN Stack & API Integration

Deployed link: https://q31week-6.vercel.app/

This repository contains all **Week-6 assignments and mini projects** developed using:

- React.js
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- Context API
- REST APIs

The assignments focus on:

- React Fundamentals
- State Management
- Forms Handling
- API Integration
- CRUD Operations
- Routing
- Context API
- MERN Stack Development
- Backend API Creation

---

# 📂 Folder Structure

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
```

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend UI |
| Vite | Fast React Build Tool |
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| MongoDB | Database |
| Mongoose | ODM |
| Context API | Global State Management |
| CSS | Styling |
| CORS | Cross-Origin Requests |

---

# 📚 Topics Covered

---

# ⚛ React.js Fundamentals

- JSX
- Functional Components
- Props
- State Management
- Event Handling
- Conditional Rendering
- List Rendering
- Forms Handling
- Hooks
- Context API

---

# 🌐 MERN Stack Concepts

- MongoDB Database
- Express.js APIs
- React Frontend
- Node.js Backend
- CRUD Operations
- API Integration

---

# 🔄 REST API Concepts

- GET Requests
- POST Requests
- PUT Requests
- DELETE Requests
- API Routing
- Error Handling

---

# 🧠 State Management Concepts

- useState
- useEffect
- Context API
- Props Drilling
- Component Re-rendering

---

# ⚛ React App - 1

This project demonstrates React component development and form handling.

---

# 📂 Components Included

| Component | Purpose |
|------------|----------|
| `EditCounter1.jsx` | Counter Update Demo |
| `EditCounter2.jsx` | Counter Logic Demo |
| `EditCounter3.jsx` | Advanced Counter Example |
| `EditCounter4.jsx` | Counter Modification |
| `FormDemo.jsx` | React Form Handling |
| `FormDemoSir.jsx` | Form Validation Example |
| `Product.jsx` | Product Component |
| `RootLayout.jsx` | Main Layout Component |

---

# 🔢 Counter Components Explanation

The counter components demonstrate:

- State updates
- Increment & decrement
- Event handling
- Dynamic rendering

## Example

```jsx
const [count, setCount] = useState(0);
```

### Explanation

| Code | Meaning |
|------|----------|
| useState(0) | Creates state variable |
| count | Current state value |
| setCount | Updates state |

---

## Counter Update Example

```jsx
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

### Explanation

- `onClick` handles button events
- `setCount()` updates state
- React automatically re-renders UI

---

# 📝 Form Demo Components

These components demonstrate:

- Controlled Components
- Form Validation
- Input Handling
- Event Management

---

## Example

```jsx
const [name, setName] = useState("");
```

### Explanation

- Stores input field value
- Updates dynamically while typing

---

## Input Handling Example

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Explanation

| Property | Purpose |
|----------|----------|
| value | Current input value |
| onChange | Detects typing |
| e.target.value | Gets typed text |

---

# 📦 Product Component

Displays product information dynamically.

## Concepts Used

- Props
- JSX
- Dynamic Rendering

## Example

```jsx
<Product
  name="Laptop"
  price={50000}
/>
```

### Explanation

- Props pass data between components
- Components become reusable

---

# ⚛ React App - 2

This project focuses on:

- API Integration
- User Components
- Reusable Layouts
- Ref Types
- Navigation Components

---

# 📂 Components Included

| Component | Purpose |
|------------|----------|
| `APIDemo.jsx` | API Fetch Example |
| `Counter.jsx` | Counter Component |
| `Footer.jsx` | Footer Layout |
| `FormDemo.jsx` | Form Handling |
| `Navbar.jsx` | Navigation Bar |
| `TestRefTypes.jsx` | Ref Handling |
| `User.jsx` | User Component |
| `UsersList.jsx` | Dynamic User List |

---

# 🌐 API Demo Component

Demonstrates fetching data from APIs.

## Concepts Used

- Fetch API
- useEffect Hook
- Async Operations

---

## Example

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

### Explanation

| Hook | Purpose |
|------|----------|
| useEffect | Runs side effects |
| fetch() | Makes API request |
| .then() | Handles response |

---

# 👤 Users List Component

Displays users dynamically.

## Example

```jsx
users.map((user) => (
  <User key={user.id} user={user} />
))
```

### Explanation

- `.map()` loops through array
- Dynamically renders components
- `key` improves React performance

---

# 🧭 Navbar Component

Demonstrates reusable navigation UI.

## Features

- Navigation links
- Responsive layout
- Reusable structure

---

# 🪝 Ref Types Component

Demonstrates React Refs.

## Concepts Used

- useRef Hook
- DOM access
- Focus handling

---

# 🌐 React Routing Demo

This project demonstrates:

- React Router
- Navigation
- Nested Routes
- Layout Routes

## Concepts Used

```jsx
BrowserRouter
Routes
Route
Link
Outlet
```

---

# 🔀 Example Routing

```jsx
<Route path="/" element={<Home />} />
```

### Explanation

- Defines application routes
- Maps URL to components

---

# 🚀 MERN Mini App

A complete MERN Stack mini project.

The project contains:

- Backend APIs
- MongoDB Database
- React Frontend
- CRUD Operations

---

# 📂 MERN Project Structure

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

---

# 🗄 Employee Management System

The MERN mini app mainly focuses on employee management.

---

# 📘 Employee Schema Explanation

```js
const employeeSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  companyName: String
});
```

---

# 🧠 Schema Field Explanation

| Field | Purpose |
|------|----------|
| name | Employee Name |
| email | Employee Email |
| mobile | Contact Number |
| designation | Job Role |
| companyName | Company Name |

---

# ⚡ Mongoose Features Used

```js
timestamps:true,
versionKey:false,
strict:"throw"
```

### Explanation

| Option | Purpose |
|--------|----------|
| timestamps | Adds createdAt & updatedAt |
| versionKey:false | Removes __v field |
| strict:"throw" | Throws error for invalid fields |

---

# 🌐 Employee API Explanation

---

# 1️⃣ Create Employee API

```js
employeeApp.post("/create-emp", async(req,res)=>{})
```

## Purpose

Creates a new employee document.

## Flow

1. Get employee data from frontend
2. Create document
3. Save to MongoDB
4. Return response

---

# 2️⃣ Read Employees API

```js
employeeApp.get("/list", async(req,res)=>{})
```

## Purpose

Fetches all employees from database.

## Features

- Returns employee list
- Handles empty database case

---

# 3️⃣ Update Employee API

```js
employeeApp.put("/employees/:_id", async(req,res)=>{})
```

## Purpose

Updates employee details.

## Features

- Dynamic route parameters
- Validation support
- Returns updated employee

---

# 4️⃣ Delete Employee API

```js
employeeApp.delete("/employees/:_id", async(req,res)=>{})
```

## Purpose

Deletes employee from database.

---

# 🌐 Backend Server Explanation

The backend server is built using:

- Express.js
- MongoDB
- Mongoose
- CORS

---

# 🔌 Database Connection

```js
await connect(process.env.DB_URL);
```

### Explanation

- Connects MongoDB database
- Uses environment variables

---

# 🌍 CORS Configuration

```js
app.use(cors({
  origin:["http://localhost:5173"],
}));
```

### Explanation

Allows frontend React app to access backend APIs.

---

# ⚠ Error Handling Middleware

The backend includes centralized error handling.

---

## Validation Error Handling

```js
if (err.name === "ValidationError")
```

### Purpose

Handles schema validation errors.

---

## Duplicate Key Error

```js
if (errCode === 11000)
```

### Purpose

Handles duplicate email errors.

---

# 🔄 Frontend & Backend Integration

Frontend communicates with backend APIs using:

- fetch()
- Axios
- REST APIs

---

# 📦 CRUD Operations Covered

| Operation | Method |
|-----------|---------|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

---

# 🧠 Context API

The project demonstrates Context API for:

- Global state management
- Sharing data across components
- Avoiding props drilling

---

# 📱 Responsive UI Concepts

Projects include:

- Responsive layouts
- Reusable components
- Modern UI structure

---

# 🚀 How to Run React Projects

---

# Step 1

Install dependencies

```bash
npm install
```

---

# Step 2

Start development server

```bash
npm run dev
```

---

# 🌐 How to Run Backend

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
PORT=6987
DB_URL=your_mongodb_connection_string
```

---

# Step 4

Run server

```bash
node server.js
```

---

# 📚 Learning Outcomes

By completing these assignments, the following skills were improved:

✅ React Fundamentals  
✅ Hooks Usage  
✅ Forms Handling  
✅ API Integration  
✅ CRUD Operations  
✅ MERN Stack Development  
✅ MongoDB Integration  
✅ Express.js Backend  
✅ REST APIs  
✅ State Management  
✅ Error Handling  
✅ React Routing  
✅ Context API

---

# 📈 Future Improvements

Possible future enhancements:

- Authentication System
- JWT Security
- Protected Routes
- Redux Toolkit
- File Uploads
- Pagination
- Search & Filters
- Admin Dashboard
- Deployment

---

# 👨‍💻 Author

## Sushanth Bandari

Computer Science Engineering Student  
Anurag University

---

# ⭐ Summary

Week-6 assignments focused on:

✅ React.js Development  
✅ MERN Stack Basics  
✅ Backend APIs  
✅ MongoDB CRUD  
✅ API Integration  
✅ React Routing  
✅ Context API  
✅ Modern Frontend Development

---
