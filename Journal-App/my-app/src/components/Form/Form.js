export default function Form({children, name}) {
    return <form>
        <label name="inputName">
            <input id="inputName">
            </input>
        </label>
        <label>
            <textarea required >
            </textarea>
        </label>
        <button>{children}</button>
    </form>;
  }
  