import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export const Stopwatch = () => {
    // const [timerId , setTimerID] =useState(null)
    const timerId =useRef(null)
    const [watch ,setWatch] =useState(0);

    const start=()=>{
        if(!timerId.current){
            let id =setInterval(()=>{
                setWatch((prev)=>prev+1);
            },100);

        // setTimerID(id);
        timerId.current=id
            }
    }
    const push=()=>{
        clearInterval( timerId.current);
        // setTimerID(null);
        timerId.current =null
    }
    const reset =()=>{
        clearInterval( timerId.current);
        setWatch(0);
        // setTimerID(null);
        timerId.current =null
    }
    useEffect(()=>{
        return reset
    },[])
  return (
    <div>
    <h1>Stopwatch</h1>
    <h1>{watch}</h1>
        <div>
        <button onClick={start}>Start</button>
        <button onClick={push}>Push</button>
        <button onClick={reset}>Reset</button>
        </div>

    </div>
  )
}
