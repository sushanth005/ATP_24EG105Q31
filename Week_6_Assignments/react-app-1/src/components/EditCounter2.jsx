import { useContext } from "react"
import { counterContextObj } from "../contexts/CounterContextProvider" 

function EditCounter2() {

  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj);
  console.log(counterContextObj);

  return (
    <div>
      <h1 className="text-center text-3xl">EditCounter2</h1>
      <div className="bg-orange-500 text-align w-100 h-50">
        <h2 className=" p-10  text-3xl text-center">{counter}</h2>
        <div className="flex justify-around">
          <button onClick={incrementCounter} className="bg-purple-600 text-white px-5 py-3">+</button>
          <button onClick={decrementCounter} className="bg-purple-600 text-white px-5 py-3">-</button>
        </div>
      </div>
    </div>
  )
}

export default EditCounter2