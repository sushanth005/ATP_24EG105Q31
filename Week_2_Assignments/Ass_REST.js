//Write a function that receives any no of arguments and return their sum
function findSum(...a)
{
    const sum = a.reduce((accumulator, element)=>accumulator+element);
    console.log(sum);
}
findSum(10,20,30,40)