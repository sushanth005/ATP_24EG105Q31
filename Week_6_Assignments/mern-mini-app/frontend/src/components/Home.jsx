import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"
import Test from "./Test";
import { useCounterStore } from "../store/useCounterStore";

function Home() {
  
    let newCounter=useCounterStore((state)=>state.newCounter);
    let incrementCounter=useCounterStore((state)=>state.incrementCounter);
    let decrementCounter=useCounterStore((state)=>state.decrementCounter);
    let resetCounter=useCounterStore((state)=>state.resetCounter);
  

  const {counter,changeCounter}=useContext(counterContextObj);
  //console.log(counter);
  console.log("Home");

  return (
    <div>
      <h1 className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5">
        Change
      </button>

      <h1 className="text-4xl">Zustand Counter: {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-green-500 p-5">
        +
      </button>

      <button onClick={decrementCounter} className="bg-red-500 p-5">
        -
      </button>

      <button onClick={resetCounter} className="bg-amber-500 p-5">
        Reset
      </button>

      <Test/>
    </div>
  );
}

export default Home