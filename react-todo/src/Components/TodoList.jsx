import React from 'react'
import { TodoItems } from './TodoItems'

export const TodoList = ({todos}) => {
  return (
    <div>{todos.map(e=>{
      return <div key={e.id}>
        <TodoItems todos={e}/>
        </div>
       
      
    })}</div>
  )
}
