import React from 'react'

export const TodoItems = ({todos}) => {
  return (
    <div>
    <input type="checkbox"/>
    {todos.title}
    <button >del</button>
    </div>
  )
}
