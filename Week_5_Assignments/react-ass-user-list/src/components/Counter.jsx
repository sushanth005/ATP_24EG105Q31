import { useState } from "react";
function Counter(){
    //state
    const [count, setCount] = useState(0); //[state, function to modify state]

    //functions to modify the state
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count-1);
    }
};
console.log("counter Component");
return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment} className="bg-green-400">+</button>
        <button onClick={decrement} className="bg-red-400">-</button>
    </div> 
)