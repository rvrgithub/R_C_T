// import React, { useState } from 'react'
// import { TodoItem } from './TodoItems';
// export const TodoInput = () => {
//     const [todo , setTodos] =useState([]); //state...
//     const [newTodo,setNewTodo] =useState("")
//         // read input...
//         // update todos list...
//         // re ender todos list when updated....
    
//         const handleChange=(e)=>{
//             setNewTodo 
//             (e.target.value);
//         }
//   return (
//     <div>  {/* input... */}
//     <input value={newTodo} onChange={handleChange}/>

//     {/* update the list.... */}
//     <button onClick={()=>{
//         setTodos([
//             ...todo,
//             {
//                 id:Date.now(), value:newTodo,isCompleted :false
//                 }
//         ])
//         setNewTodo("")
//     }}>Add</button></div>
//   )
// }
