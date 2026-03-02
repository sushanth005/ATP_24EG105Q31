//find the sum of an array(marks)
function arraySum(marks){
    let sum = 0;
    for(let i=0; i<marks.length; i++)
    {
        sum += marks[i];
    }
    return sum;
}
console.log(arraySum([90, 78, 65, 98]));
