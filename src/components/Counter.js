import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => (count += 1));
  }

  return (
    <button onClick={increment}>
      I was clicked <span style={{ fontSize: "500px" }}>{count}</span> times
    </button>
  );
}

export default Counter;