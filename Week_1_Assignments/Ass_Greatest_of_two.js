//Greatest of two numbers using functions
function greatest(num1, num2){
    if(num1 > num2)
    {
        return num1;
    }else if(num2 >num1)
    {
        return num2;
    }else{
        return "Both numbers are equal";
    }
}
console.log(greatest(10,20));