import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const Timer = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
  const [lastPage, setLastpage] =useState(0)
  const [limit ,setLimit] =useState("");
    // state to start this pageNumber.....
    // api for every pageNumber change....
    useEffect(() => {
      // 
  // useEffect when one perticular state value changes...
  
  
      // const getTodos = async () => {
        // let r = await 
        axios.get(
          `${process.env.REACT_APP_BASE_URL}/todos?_page=${page}&_limit=${limit}`
        ).then((r)=>{
          console.log(r.data);
          setTodos(r.data);
          setLastpage(Number(r.headers["x-total-count"]))
        })
       
      // };
      // getTodos();
    }, [page , limit]);
    return (
      <div >
       <button
        disabled={page===1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {"<"}
          {" "}
        </button>
  
 <select onClick={(e)=>setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
         </select>
  
  {/* not working */}
         {/* <input
           type="number"
           value={limit}
           min={0}
           max={lastPage}
           onClick={({target})=>setLimit(Number(target.value))}
         /> */}

         
        <button
        disabled={lastPage<page*limit}
          onClick={() => {
            setPage(page + 1);
          }}
        >
        {" "}
          {">"}
        </button>
      <h1>Todo</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.id}
            {" : "} {todo.todo}
          </div>
        ))}
       
      </div>
    );
}
