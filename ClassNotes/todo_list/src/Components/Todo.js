import React, { useState } from 'react'
import { TodoItem } from './TodoItems';


export const Todo=()=> {
    const [todo , setTodos] =useState([]); //state...
const [newTodo,setNewTodo] =useState("")


const onDelete =(id)=>{
  let deleteValue = todo.filter((todo)=>todo.id !==id);
  setTodos(deleteValue) 
}
    // read input...
    // update todos list...
    // re ender todos list when updated....

    const handleChange=(e)=>{
        setNewTodo 
        (e.target.value);
    }
  return (
    <div>Todo
    {/* input... */}
    <input value={newTodo} 
    placeholder="Press Enter"
    onChange={handleChange}
      onKeyDownCapture={(e)=>{
        if(e.key=== "Enter"){
          setTodos([
            ...todo,
            {
                id:Date.now(), value:newTodo,isCompleted :false
                }
        ])
        setNewTodo("")
        }
      }}
    />

    {/* update the list.... */}
    <button onClick={()=>{
        setTodos([
            ...todo,
            {
                id:Date.now(), value:newTodo,isCompleted :false
                }
        ])
        setNewTodo("")
    }}>Add</button>


    {/* render the list.... */}
        {todo.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}
            onDelete={onDelete}
          />
            
        ))}
    </div>
  )
}

 