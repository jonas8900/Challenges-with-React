export default function Form({children}) {
    return <form name={children}>
        <h2>NEW ENTRY</h2>
        <label name="inputName">
            <input className="inputStyling" id="inputName" required>
            </input>
        </label>
        <label>
            <textarea className="inputStyling" required >
            </textarea>
        </label>
        <button>{children}</button>
    </form>;
  }
  