import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">GIDF</h2>
      <label htmlFor="inputID"></label>
      <input id="inputID" type="text" required></input>
      <button type="submit">submit</button>
      <a className="article__link" href="https://www.google.de/">
        click here to see your Answer
      </a>
    </article>
  );
}
