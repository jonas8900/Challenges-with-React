import "./Form.css";
import { uid } from "uid";

export default function Form({ addOnSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const inputData = {
      id: uid(),
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    };

    addOnSubmit(inputData);
    event.target.reset();
  }

  return (
    <>
      <form className="form__section" onSubmit={handleSubmit}>
        <h1>Add new activity:</h1>
        <div>
          <label htmlFor="inputNameText">name: </label>
          <input
            id="inputNameText"
            type="text"
            name="name"
            required
            placeholder="add activity...."
          ></input>
        </div>
        <div>
          <label htmlFor="checkboxWeather">Good weather activity</label>
          <input
            id="checkboxWeather"
            type="checkbox"
            name="isForGoodWeather"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
