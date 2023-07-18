import "./styles.css";

export default function App() {
  return <Greeting name="Thomas" />;
}

function Greeting({ name }) {
  if (name === "Thomas") {
    return <h1>Hello Coach !</h1>;
  } else {
    return <h1>Hello {name} !</h1>;
  }
}
