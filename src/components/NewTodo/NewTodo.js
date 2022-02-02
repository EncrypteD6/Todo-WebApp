import { useState } from "react";
import "./NewTodo.css";

const NewTodo = ({ todo, addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const todoOnSubmit = (e) => {
    e.preventDefault();
    if (newTodo === " " || newTodo.length === "") {
      alert("enter a value");
    } else {
      const temp = [...todo];
      temp.push(newTodo);
      addTodo(temp);
      setNewTodo("");
    }
  };

  return (
    <div className="input-container">
      <form>
        <input
          value={newTodo}
          type="text"
          placeholder="Add a To-do"
          onInput={(e) => setNewTodo(e.target.value)}
        />

        <button className="addNew" onClick={todoOnSubmit}>Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
