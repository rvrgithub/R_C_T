import React from 'react'
import { useState } from 'react'

export const  TodoInput=({addTodo}) =>{
    const [value ,setValue] = useState("");
  return (
    <div>
        <input type="text" 
        value={value}
        placeholder='new todo'
        onChange={(e)=>{
            setValue(e.target.value)
    
        }}/>
        <button onClick={()=>{
            if(value){
              addTodo(value)
            setValue("")
            console.log(value)
            }
            else{
              alert("please enter atlesat 1 charecter")
            }
        }}>Add</button>
    </div>
  )
}

