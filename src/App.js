import React from "react";
import { useCounter } from "./context/CounterContext";
import ProductList from "./components/ProductList";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <h1>Count: {count}</h1>
    //   <button onClick={increment}>Increment</button>
    //   <button onClick={decrement}>Decrement</button>
    //   <button onClick={reset}>Reset</button>
    // </div>
    <>
    <ProductList/>
    </>
  );
}

export default App;
