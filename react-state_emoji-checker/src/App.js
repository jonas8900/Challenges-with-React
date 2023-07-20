import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentEmoji, setEmoji] = useState("");

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setEmoji(currentEmoji + "🐡");
            console.log(currentEmoji);
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setEmoji(currentEmoji + "🐋");
            console.log(currentEmoji);
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setEmoji(currentEmoji + "🐠");
            console.log(currentEmoji);
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          setEmoji("");
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {currentEmoji === validCode && <p>Valid code!</p>}
    </div>
  );
}
