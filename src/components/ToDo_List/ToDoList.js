import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";
export default function ToDoList({ items }) {
  return (
    <ul className="to-do-list">
      {items.map((item) => {
        return <ToDoListItem item={item}></ToDoListItem>;
      })}
    </ul>
  );
}
