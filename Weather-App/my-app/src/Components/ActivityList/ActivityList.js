import React from "react";
import "./ActivityList.css";
import "../../App.css";

export default function ActivityList({
  cards,
  trueOrFalseChecker,
  handleDeleteCard,
}) {
  console.log(cards);
  return (
    <>
      <section>
        <h2 className="activityList__headline">
          {trueOrFalseChecker ? "its a beautiful day" : "I`ts very bad Outside"}
        </h2>
        <ul className="activity__list">
          {" "}
          {cards.map((card) => (
            <React.Fragment key={card.id}>
              <li className="activity__list--item" key={card.id}>
                {card.name}
              </li>
              <button onClick={() => handleDeleteCard(card.id)} type="button">
                delete card
              </button>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </>
  );
}
