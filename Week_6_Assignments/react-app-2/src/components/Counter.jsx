import {useState} from 'react';

function Counter()
{
    //state

    const [count,setCount]=useState(0); //[state,function to modify the state] 

    //function to modify the state
    const increment=()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }

    const reset = (value)=>{
        setCount(value);
    }

    console.log("counter component");
    return (
    <div className="text-center p-5 border">
        <h1 className="text-3xl"> Count: {count} </h1>
        <button className="bg-green-400 px-6 py-3 mr-10" onClick={increment}>+</button>
        <button className="bg-red-400 px-6 py-3" onClick={decrement}>-</button>
        <button className="bg-blue-400 px-6 py-3" onClick={()=>reset(0)}>Reset</button>
    </div>
    )
}

export default Counter;