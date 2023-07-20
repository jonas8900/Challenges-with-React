import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <>
      <Header>Journal</Header>
      <Main>
        <Form name="form--entry">Create</Form>
      </Main>
      </>
  );
}
