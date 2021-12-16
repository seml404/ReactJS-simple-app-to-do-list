import "./App.css";
import React, { useEffect, useState } from "react";
import ToDoList from "../ToDo_List/ToDoList";
import AddForm from "../AddForm/AddForm";
import Spinner from "../Spinner/Spinner";
const AppContext = React.createContext();

function App() {
  useEffect(() => {
    setLoadingState(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_page=4&_limit=4")
        .then((response) => response.json())
        .then((res) => setItemsState(res));
      setLoadingState(false);
    }, 1000);
  }, []);

  // let itemsArr = [
  //   { title: "test1", id: 1 },
  //   { title: "test2", id: 2 },
  //   { title: "test3", id: 3 },
  //   { title: "test4", id: 4 },
  // ];

  let itemsArr = [];

  let [itemsState, setItemsState] = useState(itemsArr);
  let [loadingState, setLoadingState] = useState(true);
  function addItem(text) {
    let lastId = itemsState[itemsState.length - 1].id;
    let amendedArr = [...itemsState];
    amendedArr.push({ title: text, id: lastId + 1 });
    setItemsState(amendedArr);
  }

  function removeItem(id) {
    let amendedArr = itemsState.filter((item) => item.id !== id);
    setItemsState(amendedArr);
  }

  if (loadingState) {
    return (
      <div className="wrapper">
        <Spinner></Spinner>;
      </div>
    );
  } else {
    return (
      <>
        <div className="wrapper">
          <AppContext.Provider value={{ addItem, removeItem }}>
            <h1>A very simple ReactJS ToDo app</h1>
            <AddForm></AddForm>
            <ToDoList items={itemsState}></ToDoList>
          </AppContext.Provider>
        </div>
      </>
    );
  }
}
export { App, AppContext };
