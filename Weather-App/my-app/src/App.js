import "./App.css";
import Form from "./Components/Form/Form";
import ActivityList from "./Components/ActivityList/ActivityList";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

function App() {
  const [cards, setCards] = useLocalStorageState("cards", {
    defaultValue: [],
  });

  // filter gibt ein neues Array zurück, filteredCard gibt ein Array zurück in denen alle Elemente true sind aufgrund der Funtkion

  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }

  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });

  async function handleFetch() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const fetchResult = await response.json();
      setWeather(fetchResult);
    } catch {
      console.log("Error, cant fetch data");
    }
  }
  useEffect(() => {
    setInterval(handleFetch, 5000);
  });
  console.log(weather);
  console.log(cards);

  const filteredCards = cards.filter(
    (card) => card.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <div className="App_headline--nextTo">
        <h1 className="App__headline--condition">{weather.condition}</h1>
        <h2 className="App__headline--temperature">
          {weather.temperature + "°c"}
        </h2>
      </div>
      <ActivityList
        cards={filteredCards}
        trueOrFalseChecker={weather.isGoodWeather}
      />
      <Form addOnSubmit={handleAddCard} />
    </>
  );
}

export default App;
