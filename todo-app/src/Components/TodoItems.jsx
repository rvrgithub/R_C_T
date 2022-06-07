import React from 'react'

export const TodoItems = ({todo ,status, handelDelete}) => {
  return (
    <div >TodoItems
    {todo.map((e)=>(
        <div key={e.id} className="input_div" style={{display:"flex"}}>
        <input type="checkbox" 
        // className='checkbox'
        // if(status:flase){
        //   console.log("false")
        // }
        className={e.status === false ? "show checkbox" : "none checkbox"}
        />
        <p    className={e.status === false ? "show checkbox" : "none checkbox"}>{e.name}</p>
        <button className={e.status === false ? "show checkbox" : "none checkbox"} onClick={()=>handelDelete(e.id)}>Delete</button>
        </div>
    ))}
    </div>
  )
}
