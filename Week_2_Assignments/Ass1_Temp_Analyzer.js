//Daily Temp analyzer
//Analyzing daily temperatures recorded by a weather app

let testData=[32, 35, 28, 40, 38, 30, 42];
//1. Filter to temperatures above 35
const result = testData.filter(temp => temp>35)
console.log("Temperatures above 35 are: ", result)

//2. Map to convert all temperatures from Celcius to Fahrenheit
const ft = testData.map(temp =>{
        return temp * 9/5 +32
})
console.log("Temperaturs in fahrenheit are: ", ft)

//3. Reduce to calculate average temperature
const avg = testData.reduce((accumulator, temp)=>accumulator+temp/testData.length, 0)
console.log("Average temperature is: ", avg)

//4.find() first temperature above 40
const temp = testData.find(temp=>temp>40)
console.log("First temperature above 40 is: ", temp)

//5. findIndex() index of temperature 28
const index = testData.findIndex(temp=>temp===28) 
console.log("Index of temperature 28 is: ", index)