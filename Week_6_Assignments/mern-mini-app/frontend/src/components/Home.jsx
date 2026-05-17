import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";
import { useCounterStore } from "../store/CounterStore";

function Home() {

  // Zustand store state
  const newCounter = useCounterStore(
    (state) => state.newCounter
  );

  const incrementCounter = useCounterStore(
    (state) => state.incrementCounter
  );

  // Context API state
  const { counter, changeCounter } =
    useContext(counterContextObj);

  console.log("Home Component Rendered");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-white mb-10">
        Counter Dashboard
      </h1>

      {/* Context API Counter */}
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 w-full max-w-md text-center mb-8">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Context API Counter
        </h2>

        <p className="text-4xl font-bold text-pink-600 mb-6">
          {counter}
        </p>

        <button
          onClick={changeCounter}
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-xl text-black font-semibold transition"
        >
          Change Counter
        </button>
      </div>

      {/* Zustand Counter */}
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Zustand Counter
        </h2>

        <p className="text-4xl font-bold text-green-600 mb-6">
          {newCounter}
        </p>

        <button
          onClick={incrementCounter}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
        >
          Increment Counter
        </button>

      </div>
    </div>
  );
}

export default Home;
