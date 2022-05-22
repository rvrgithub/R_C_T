import React from 'react'
import "./Todo.css"
import { useState } from 'react'
export const TodoItem = ({task}) => {
  const [iscompleted,setIscompleted] = useState(false);
  console.log("props",task.title)
  return (
    <div className='box_Item'>
    <p>{task.title}</p>
    <div 
    onClick={()=>{setIscompleted(!iscompleted)}}
    className={(iscompleted===true)? "purple":"green"}
    ></div>
    </div>
  )
}



