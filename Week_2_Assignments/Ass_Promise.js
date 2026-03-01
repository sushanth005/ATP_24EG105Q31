//I'll send 10k tomorrow

console.log("Friend is waiting for money")
let futureCondition=true;

const promiseobj=new  Promise((fulfilled, rejected)=> {
    setTimeout(() =>{
        if(futureCondition==true){
            fulfilled("10k sent successfully");
        }
        else{
            rejected("Insuffiicient balance");
        }
    },10000);
})
console.log(promiseobj)
promiseobj
.then(message=>console.log("message: ", message))
.catch((errormessage)=>console.log("errormessage: ", errormessage)) 