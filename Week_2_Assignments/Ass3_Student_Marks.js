const marks=[78, 92, 35, 88, 40, 67];

//filter marks >= 40
const pass=marks.filter(mark => mark >= 40)
console.log("Passed marks: ", pass)

//map() to add 5 grace marks to each student
let graceMarks=marks.map(mark => mark + 5)
console.log("Marks after adding grace marks: ", graceMarks)


//reduce() to find highest mark
let highestMark = marks.reduce((accumulator, mark) => {mark > accumulator?mark:accumulator})
console.log("Highest marks Scored: ", highestMark)

//find() first mark below 40
let fmark = marks.find(mark=>mark<40)
console.log("First mark below 40: ", fmark)

//findIndex() of mark 92
let index = marks.findIndex(mark => mark===92)
console.log("Index of mark 92: ", index)

