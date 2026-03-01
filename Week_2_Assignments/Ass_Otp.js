console.log("Otp sent successfully")
let i = 10;
let countdown = setInterval(()=>{
    console.log(i, end="");
    i--;
    if(i<0)
    {
        clearInterval(countdown);
    }
},1000)
setTimeout(() =>{
    console.log("Resend")
},10000)
let seconds=10;
let intervalID = setInterval(()=>
{
    seconds--;
    console.log('otp can resend after ${seconds} secs');
    if(seconds ===0){
        console.log("Resend Otp")
    }
})