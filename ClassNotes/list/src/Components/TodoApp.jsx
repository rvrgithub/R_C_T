import React, { useState } from 'react'
import { TodoInput } from './TodoInput'

import { TodoList } from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from './TodoItem';
function TodoApp() {
    const [todos,setTodos] = useState([]);
    const addTodo =(newTodo)=>{
        setTodos([...todos,{
            id:uuidv4(),
            value:newTodo
        }])
    }
    const deleteTodo =(value)=>{
        // console.log(todos,id);

        // let a=
        setTodos(todos.filter((todo)=>
            todo.value!== value
        ))
        // console.log(a);
        // setTodos(a)

    }
  return (
    <div>
    <TodoInput addTodo={addTodo}/>
    <TodoList >
        {todos.map((todo)=>(
            <TodoItem  key={todo.id} value={todo.value} deleteTodo={deleteTodo}/>
        ))}
    </TodoList>
    </div>
  )
}

export default TodoApp