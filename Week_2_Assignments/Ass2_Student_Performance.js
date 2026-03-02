//Student Perfomance Analysis
//You are working on a college result analysis system.

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

    //1. Filter students who passed (marks >= 40)
    const passed = students.filter(student => student.marks >= 40)
    console.log("Students passed: ", passed)

    //2. map() to add a grade field >=90->A, >=75->B, >=60->C, else->D 
    const grades = students.map(Student => {
        if(students.marks >= 90){
            return {...Student, grade: "A"}
        }
        if(students.marks >= 75){
            return {...Student, grade: "B"}
        }
        if(students.marks >=60){
            return {...Student, grade: "C"}
        }
        else{
            return{...Student, grade: "D"}
        }
    })
    console.log("Students with grades: ", grades)