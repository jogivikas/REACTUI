import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todo, setTodo] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return; // prevent empty todos
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let uploadTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    let copy = todo.filter((t) => t.id !== id); // ✅ fixed
    setTodo(copy);
  };

  return (
    <div>
      <input
        placeholder="add todo"
        value={newTodo}
        onChange={uploadTodoValue}
      />
      <br />
      <button onClick={addNewTask}>add</button>
      <br />
      <h1>Todo List</h1>
      <ul>
        {todo.map((t) => (
          <li key={t.id}>
            <span>{t.task}</span> &nbsp;
            <button onClick={() => deleteTodo(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
