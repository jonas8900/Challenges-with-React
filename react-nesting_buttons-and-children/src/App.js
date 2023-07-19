import React from "react";
import "./styles.css";

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>Click me than Kick me!</Button>
      <Button>Click me please!</Button>
      <Button>Click me NOW!</Button>
    </main>
  );
}
