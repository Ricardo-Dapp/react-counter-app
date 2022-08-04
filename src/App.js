import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div className="button-container">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
