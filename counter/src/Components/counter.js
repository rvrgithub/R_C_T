import React, { useState } from "react";
import "./counter.css"
export const Counter=()=>{
    const [count,setCount] = useState(0);
    const handleCount=(value)=>{
        setCount(value+count)
    }
    const handleCountByTwo=(value)=>{
        setCount(value*count)
    }
    return (
        <div>
            <h1 className={`${count%2===0? "even":"odd"}`}>Counter:{count}</h1>
            <button onClick={()=>{
                handleCount(1)
            }}>Add</button>
            <button onClick={()=>{
                if(count>0){
                    handleCount(-1)
                }}}>Subb</button>
<button onClick={()=>{
                handleCountByTwo(2)
                }}>duble</button>
                <h1 className={`${count%2===0? "even":"odd"}`}  >{count%2===0 ? "Even No.": "Odd No."}
                </h1>
        </div>
    )
}