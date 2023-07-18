import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("you Clicked me");
  }

  return (
    <Button
      color="yellow"
      text="Say my name"
      disabled={false}
      alert={handleClick}
    />
  );
}

function Button({ alerttext, text, color, disabled, alert }) {
  return (
    <div>
      <button
        onClick={() => alert(alerttext)}
        disabled={disabled}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
}
