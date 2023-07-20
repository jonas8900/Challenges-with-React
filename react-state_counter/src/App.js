import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentCount, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{currentCount}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(currentCount - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(currentCount + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
