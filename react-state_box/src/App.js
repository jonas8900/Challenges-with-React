import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setValue] = useState(false);

  function handleClick() {
    setValue(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
