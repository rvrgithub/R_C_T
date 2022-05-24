import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Todo = () => {
  const [newTodos, setNewTodos] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteValue = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAddValue = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        todo: newTodos,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setTodos([...todos, d]);
        setNewTodos("");
      });
  };
  useEffect(() => {
    fetch("http://localhost:8080/todos?_page=1&_limit=7")
      .then((r) => r.json())
      .then((d) => {
        // console.log(d);
        setTodos(d);
      });
  }, []);
  return (
    <div>
      Todo
      <input
        value={newTodos}
        onChange={({ target }) => setNewTodos(target.value)}
      />
      <button onClick={handleAddValue}>+</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}-:-
          {todo.todo}
          <button
            onClick={() => {
              deleteValue(todo.id)
              console.log(todo.id)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
