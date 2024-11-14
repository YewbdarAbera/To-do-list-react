import "./App.css";
import { useState } from "react";
function App() {
  const [arrayOfTodo, setArrayOfTodo] = useState(["go to charchs"]);
  const [inputValue, setInputValue] = useState();

  const onSubmitCliked = (e) => {
    e.preventDefault();
    setArrayOfTodo([...arrayOfTodo, inputValue]);
  };

  const deleteItem = (item) => {
    setArrayOfTodo(arrayOfTodo.filter((items) => items !== item));
  };
  return (
    <div className="container">
      <h1>Simple To-Do List</h1>

      <form id="todo-form">
        <input
          type="text"
          id="todo-input"
          placeholder="Add a new task"
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={onSubmitCliked}>
          Add Task
        </button>
      </form>
      <ul id="todo-list">
        {arrayOfTodo?.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button key={item} type="button" onClick={() => deleteItem(item)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
