import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "2",
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: "3",
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: "4",
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: "5",
      name: "🥭 Mango",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}
