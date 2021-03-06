import React from 'react'
import { TodoItem } from './TodoItem';
import "./Todo.css"
export const TodoList = ({task}) => {
  return (
    <div className="auto">
    {task.map((e) => {
      return <div  key={e.id}><TodoItem task={e} /></div>;
    })}
    </div>
  )
}


