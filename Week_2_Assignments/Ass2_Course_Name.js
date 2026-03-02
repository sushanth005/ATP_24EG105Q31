//You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongoDB", "express"];

//1. Filter courses with name length>5
const course5 = courses.filter(course => course.length>5)
console.log("Courses with length > 5: ", course5)

//2. Map to convert courses names to uppercase
const upperCourse = courses.map(course => course.toUpperCase())
console.log("To UpperCase: ", upperCourse)
//LowerCase
const lowerCourse = courses.map(course => course.toLowerCase())
console.log("To LowerCase: ", lowerCourse)
//Checking original data
console.log("Original Courses: ", courses)

//3.Reduce to generate a single string:  "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
courseString = courses.reduce((accumulator, course) => accumulator.toUpperCase() + " | " + course.toUpperCase())
console.log(courseString)

//4. Find the course "react"
const found = courses.find(course => course === "react")
console.log("Found course: ", found)

//5. FindIndex of "node"
const index = courses.findIndex(course => course === "node")
console.log("Index of node: ", index)