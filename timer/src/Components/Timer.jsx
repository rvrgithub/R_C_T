import React, { useRef, useState } from 'react'
import { Button,MainDiv ,ButtonDiv} from './Timer.module';
export const Timer = () => {
    const timerId =useRef(null)
    const [timer,setTimer] = useState(0);
    const start=()=>{
        if(!timerId.current){
            let id = setInterval(()=>{
                setTimer((prev)=>prev+1);
            },100);
            timerId.current=id
            console.log(timerId.current);
        }
    }
    const push=()=>{
        clearInterval(timerId.current);
        timerId.current =null
    }
    const reset=()=>{
        clearInterval(timerId.current);
        setTimer(0)
        timerId.current =null
    }
  return (
<>
    <h1>  Start The Timer</h1>
    <MainDiv>
    
    <h1>{timer}</h1>
    <ButtonDiv>
    <Button  onClick={push}>Push</Button>
    <Button  onClick={start}>Start</Button>
    <Button  onClick={reset}>Reset</Button>
    </ButtonDiv>
    </MainDiv>
    

    </>
  )
}
