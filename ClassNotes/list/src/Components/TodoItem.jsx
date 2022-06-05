import React from 'react'

export const TodoItem=({value ,deleteTodo}) =>{
  return (
    <li>
    {value}
    {/* {console.log("valueqasa",value)} */}
    <button onClick={()=>deleteTodo(value)}>delete</button>
    </li>
  )
}

