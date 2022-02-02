import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo/NewTodo";
import ViewTodoList from "./components/ViewTodoList/ViewTodolist";

function App() {
  const [todo, setTodo] = useState([
    "Do painting",
    "finish breakfast",
    "do laundry",
  ]);

  return (
    <div className="App">
      <div className="content">
        <h1>TODO-LIST</h1>
        <NewTodo todo={todo} addTodo={setTodo} />
        <ViewTodoList todo={todo} updateTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
