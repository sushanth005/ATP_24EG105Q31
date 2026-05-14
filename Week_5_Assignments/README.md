````md
# 🚀 Week-5 Assignments - HTML, CSS, Tailwind CSS & React

This repository contains all **Week-5 assignments and mini projects** developed using:

- HTML5
- CSS3
- Tailwind CSS
- React.js

The assignments focus on:

- Responsive Web Design
- CSS Layout Techniques
- Tailwind CSS Utilities
- React Components
- Dynamic Rendering
- Reusable UI Design
- Modern Frontend Development

---

# 📂 Folder Structure

```bash
Week_5_Assignments/
│
├── Cities/
├── Profile-Card/
├── Tables/
├── Tailwind-project/
├── flex/
├── form/
├── grid/
├── profile-position/
├── react-ass-product-list/
├── react-ass-user-list/
├── table_ass1/
├── table_ass2/
└── task4/
```

---

# 📚 Topics Covered

This week mainly focused on:

---

# 🌐 HTML5 Concepts

- Semantic Tags
- Forms
- Tables
- Input Types
- Navigation
- Images & Media
- Multi-page Websites
- Lists
- Hyperlinks
- Buttons

---

# 🎨 CSS3 Concepts

- Selectors
- Flexbox
- Grid Layout
- Media Queries
- Hover Effects
- Shadows
- Animations
- Positioning
- Responsive Design
- Typography
- Card Design
- CSS Units

---

# ⚡ Tailwind CSS Concepts

- Utility-first CSS
- Responsive Utilities
- Margin & Padding
- Flex & Grid Utilities
- Text Styling
- Hover Effects
- Tailwind Responsive Breakpoints
- Component Styling
- Modern UI Design

---

# ⚛ React.js Concepts

- Components
- Props
- JSX
- Dynamic Rendering
- Array Mapping
- Reusable Components
- Functional Components
- React Project Structure

---

# 🏙 Cities Project

A multi-page website showing information about different cities.

## Features

- Navigation bar
- City information pages
- Image sections
- Responsive layout
- Styled cards

## Concepts Used

- HTML Structure
- CSS Styling
- Flexbox
- Responsive Design

## Learning Outcomes

- Multi-page navigation
- Responsive layouts
- Content organization

---

# 👤 Profile Card Project

A stylish profile card UI built using HTML and CSS.

## Features

- User image
- Social icons
- Hover effects
- Rounded borders
- Shadow effects

## Concepts Used

```css
box-shadow
border-radius
hover
transform
```

## Skills Learned

- Card UI Design
- CSS Effects
- Profile Layouts

---

# 📊 Tables Project

Assignments related to HTML tables.

## Topics Covered

- Table structure
- Rowspan
- Colspan
- Table styling
- Borders & spacing

## Table Concepts

```html
<table>
<tr>
<td>
<th>
rowspan
colspan
```

## Learning Outcomes

- Complex table creation
- Data representation
- Table formatting

---

# 📦 Tailwind CSS Project

A project built using Tailwind CSS utility classes.

## Features

- Responsive design
- Modern UI
- Utility-based styling
- Mobile-friendly layout

## Tailwind Classes Used

```html
flex
grid
bg-blue-500
text-white
p-4
rounded-lg
shadow-lg
hover:bg-blue-700
```

## Concepts Learned

- Utility-first workflow
- Rapid UI development
- Responsive breakpoints

---

# 🔄 Flexbox Project

Responsive layouts created using Flexbox.

## Features

- Flexible containers
- Responsive cards
- Alignment techniques

## Important CSS Properties

```css
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
flex-wrap: wrap;
```

## Learning Outcomes

- Flexible layouts
- Alignment handling
- Responsive UI design

---

# 🧱 Grid Project

Projects demonstrating CSS Grid layouts.

## Features

- Grid columns & rows
- Responsive layouts
- Structured webpage sections

## Important CSS Properties

```css
display: grid;
grid-template-columns
grid-template-rows
gap
```

## Skills Learned

- Advanced layouts
- Responsive grid systems
- Complex webpage structure

---

# 📝 Form Project

HTML form creation and styling assignment.

## Features

- Input fields
- Validation
- Buttons
- Responsive form layout

## Input Types Used

```html
text
password
email
radio
checkbox
submit
```

## Learning Outcomes

- Form validation
- User input handling
- Form design principles

---

# 📍 Profile Position Project

Profile card using CSS positioning.

## CSS Positioning Used

```css
position: relative;
position: absolute;
position: fixed;
```

## Features

- Floating elements
- Icon placement
- Layered design

## Skills Learned

- Element positioning
- Layer management
- Layout precision

---

# ⚛ React Assignment - Product List

A React project that dynamically displays products.

## Features

- Product cards
- Dynamic rendering
- Reusable components
- Array mapping

## React Concepts Used

```jsx
props
map()
components
JSX
```

## Example Code Explanation

```jsx
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 25000 }
];
```

### Explanation

- Products are stored inside an array.
- Each object represents one product.
- React dynamically displays products using `.map()`.

---

## Dynamic Rendering Example

```jsx
products.map((product) => (
  <div key={product.id}>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
  </div>
))
```

### Explanation

- `.map()` loops through the array.
- JSX dynamically creates product cards.
- `key` improves rendering performance.

---

# ⚛ React Assignment - User List

A React project displaying multiple users dynamically.

## Features

- User cards
- Dynamic user rendering
- Reusable UI components

## Concepts Used

```jsx
functional components
props
array rendering
```

---

## Example Code

```jsx
const users = [
  { id: 1, name: "Sushanth" },
  { id: 2, name: "Rahul" }
];
```

### Explanation

- User data is stored in an array.
- React renders each user dynamically.

---

# 📋 Table Assignment 1

Focus on:

- Basic table structure
- Borders
- Cell spacing
- Headings

## Concepts Learned

- `<table>`
- `<tr>`
- `<td>`
- `<th>`

---

# 📋 Table Assignment 2

Focus on:

- Rowspan
- Colspan
- Complex tables

## Skills Learned

- Advanced table formatting
- Merged cells
- Data grouping

---

# 📌 Task4 Project

Additional practice assignment combining:

- HTML
- CSS
- Responsive Design
- Layout Techniques

---

# 💡 Code Explanation Topics

---

# 🔹 HTML Explanation

## Example

```html
<h1>Hello World</h1>
```

### Explanation

- `<h1>` defines a heading.
- Used for main webpage titles.

---

# 🔹 CSS Explanation

## Example

```css
.container{
  display:flex;
  justify-content:center;
}
```

### Explanation

- `display:flex` creates flexible layouts.
- `justify-content:center` centers items horizontally.

---

# 🔹 Tailwind CSS Explanation

## Example

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
```

### Explanation

| Class | Meaning |
|------|----------|
| bg-blue-500 | Blue background |
| text-white | White text |
| p-4 | Padding |
| rounded-lg | Rounded corners |

---

# 🔹 React JSX Explanation

## Example

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Explanation

- Functional React component
- JSX returns UI elements
- React renders dynamically

---

# 📱 Responsive Design Concepts

Projects were designed using:

- Flexbox
- CSS Grid
- Media Queries
- Tailwind Responsive Utilities

## Example

```css
@media(max-width:768px){
  .container{
    flex-direction:column;
  }
}
```

### Explanation

- Changes layout on smaller screens.
- Makes website mobile responsive.

---

# 🚀 How to Run HTML Projects

## Step 1

Open project folder.

## Step 2

Open HTML file in browser.

Example:

```bash
index.html
```

---

# ⚛ How to Run React Projects

## Step 1

Install dependencies

```bash
npm install
```

---

## Step 2

Start React app

```bash
npm run dev
```

or

```bash
npm start
```

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure |
| CSS3 | Styling |
| Tailwind CSS | Utility Styling |
| React.js | Frontend Framework |

---

# 🎯 Learning Outcomes

By completing these assignments, the following skills were improved:

- Responsive Web Design
- Modern CSS Layouts
- Tailwind CSS Styling
- React Component Development
- Dynamic Rendering
- Reusable Components
- Flexbox & Grid
- Form Handling
- UI Design
- Multi-page Website Development

---

# 📈 Future Improvements

Possible future enhancements:

- Add JavaScript interactivity
- Connect React apps with APIs
- Add animations
- Add dark mode
- Improve responsive design
- Add backend integration

---

# 👨‍💻 Author

## Sushanth Bandari

Computer Science Engineering Student  
Anurag University

