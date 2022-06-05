import React from "react";
import { useState } from "react";

export const TodoItem = ({todo , onDelete})=>{
    const [isCompleted ,setIsCompleted] =useState(todo.isCompleted);
    return (
        <div className="" key={todo.id}>
        <input type="checkbox" checked={isCompleted}
            onChange={(e)=>{
                setIsCompleted(e.target.checked )
                console.log(e.target.checked)
            }}
        />
        <div className={isCompleted? "striked" :""}>{todo.value}</div>
        <button onClick={()=>
        onDelete(todo.id)}
        >Delete</button>
        </div>
    )
}