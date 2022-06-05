import React from 'react'

export const TodoList = ({children}) => {
  return (
    <div>
    <h1>Here is your Todo List</h1>
    <ul>{children}</ul>
    </div>
  )
}
