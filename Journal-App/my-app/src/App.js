import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="div__container">
      <Header>Journal</Header>
      <Main>
        <Form></Form>
      </Main>
    </div>
  );
}
