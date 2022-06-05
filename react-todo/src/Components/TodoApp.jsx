import React from "react";
import { useState } from "react";
import { TodoDel } from "./TodoDel";
// import { TodoItems } from "./TodoItems";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";
export const TodoApp = () => {
  const [todoValue, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChande = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    const payload = {
      id: uuidv4(),
      title: todoValue,
      status: false,
    };
    let new_todo = [...todos, payload];
    setTodos(new_todo);
    setValue("");
    console.log("new_todo", new_todo);
  };
  console.log(todoValue);
  return (
    <div>
      <input
        placeholder=". . . write something . . ."
        value={todoValue}
        onChange={handleChande}
      />
      <button onClick={handleAdd}>+</button>
 
      <TodoList todos={todos}/>
      <TodoDel />
    </div>
  );
};
