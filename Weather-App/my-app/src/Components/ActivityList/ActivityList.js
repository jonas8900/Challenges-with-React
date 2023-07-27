import React from "react";
import "./ActivityList.css";

export default function ActivityList({
  cards,
  trueOrFalseChecker,
  onDeleteActivity,
}) {
  console.log("cards", cards);

  return (
    <>
      <section>
        <h2 className="activityList__headline">
          {trueOrFalseChecker ? "its a beautiful day" : "go online"}
        </h2>
        <ul className="activity__list">
          {" "}
          {cards.map((card) => (
            <React.Fragment key={card.id}>
              <li className="activity__list--item" key={card.id}>
                {card.name}
              </li>
              <button onClick={() => onDeleteActivity(card.id)} type="button">
                delete card
              </button>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </>
  );
}
