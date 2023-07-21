import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [numberValue, setnumberValue] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber numberValue={numberValue} />
      <div className="counter__buttons-container">
        <button
          onClick={() => setnumberValue(numberValue + 1)}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={() => setnumberValue(numberValue - 1)}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
