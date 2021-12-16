import React, { useState } from "react";
import { AppContext } from "../app/App";

export default function ToDoListItem({ item }) {
  const { removeItem } = React.useContext(AppContext);

  let [itemClass, setItemClass] = React.useState(["to-do-list-item"]);

  const toggleClass = () => {
    console.log();
    itemClass[0].includes("checked")
      ? setItemClass(["to-do-list-item"])
      : setItemClass(["to-do-list-item checked"]);
  };

  return (
    <>
      <li className={itemClass.join(" ")}>
        <input type="checkbox" onChange={() => toggleClass()}></input>
        <p>{item.title}</p>
        <div
          onClick={() => {
            removeItem(item.id);
          }}
          className="close"
        >
          &#10006;
        </div>
      </li>
    </>
  );
}
