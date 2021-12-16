import React from "react";
import { AppContext } from "../app/App";
export default function AddForm() {
  const { addItem } = React.useContext(AppContext);

  function addedItem(e) {
    e.preventDefault();
    let value = document.querySelector(".form-input").value;
    if (value) {
      addItem(value);
    }
    document.querySelector(".form-input").value = "";
  }
  return (
    <>
      <form className="main-form" onSubmit={(e) => addedItem(e)}>
        <input className="form-input"></input>
        <button className="btn btn-warning">Add a task</button>
      </form>
    </>
  );
}
