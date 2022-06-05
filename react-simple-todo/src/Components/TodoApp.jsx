import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import "./Todo.css";
export const TodoApp = () => {
  const [first, setFirstValue] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    let new_value = e.target.value;
    setFirstValue(new_value);
    // console.log("e", new_value);
  };
  const handleAdd = () => {
    const payload = {
      id: uuidv4(),
      title: first,
      status: false,
    };
    let newTask = [...task, payload];
    setTask(newTask);
    setFirstValue("");
  };
  // console.log("id",id)
  // console.log("task", task);
  return (
    <>
    
      <div>
        <TodoList task={task} />
      </div>
      <div className="input_box">
        <input
          value={first}
          placeholder=". . . write something . . ."
          onChange={handleChange}
        />
        <button disabled={!task} onClick={()=>{handleAdd()}}>
          +
        </button>
      </div>
    </>
  );
};
