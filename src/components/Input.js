import React, { useState } from "react";

function Input(props) {
  const [enteredText, setEnteredText] = useState("");

  function onChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    props.textInput(enteredText);
    setEnteredText("");
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input onChange={onChangeHandler} type="text" value={enteredText}></input>
      <button>Send</button>
    </form>
  );
}
export default Input;
