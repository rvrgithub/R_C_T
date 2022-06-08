import React from "react";
// import { useEffect } from 'react';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItems } from "./TodoItems";
export const Todo = () => {
  const [todo, setTodo] = useState([]);

  const hendelChange = (data) => {
    // console.log("ehkjgl g")
    const payload = {
      name: data,
      status: false,
      id: uuidv4(),
    };
    setTodo([...todo, payload]);
  };
  console.log("data", todo);

  const handelDelete = (id) => {
    console.log("del", id);
    const del = [...todo];
    del.splice(id, 1);
    setTodo(del);
  };

  const updateTodo=()=>{
      console.log("update")
  }
  return (
    <div className="mainBox">
    
      <div>
        {" "}
        <input
        className="input_box"
          placeholder="+ Add Todo"
          name="input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              hendelChange(e.target.value);
            }
          }}
        ></input>
      </div>
      <TodoItems
        todo={todo}
       
           handelDelete={handelDelete}
      />
          <button onClick={updateTodo}>   SHOW COMPLETED TO-DOS </button>
    </div>


  );
};
