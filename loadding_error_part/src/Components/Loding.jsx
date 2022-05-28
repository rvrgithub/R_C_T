import React from "react";
import { useState } from "react";

export const Loding = ({hidden}) => {
const [isLoading ,setIsLoading] = useState(false);
const [isError ,setIsError] = useState(false);
const [show, setShow] = useState(false)

if(hidden){
  return null
}
const fectchData =()=>{
    setIsLoading(true);
    setIsError(false);
    setTimeout(()=>{
        setIsLoading(false);
    },2000)
}
const fectchIsError =()=>{
    setIsLoading(true);
    setIsError(false);
    setTimeout(()=>{
        setIsLoading(false);
        setIsError(true);
    },2000)
}
// ternary operator ? true:false...

    return isLoading ? //if condition...
    (
      <div className="App">
        <h1>...Loading</h1>
      </div>
    ) : isError ? //else if condition...
  (
      <div className="App">
        <h1>Something whent wrong</h1>
        <button onClick={fectchData}>Do you want to fetch data agin?</button>
      </div>
    ) : ( // both condition ...
      <div className="App">
  <div>Hello</div>
  <h2>Start editing to see some magic happent!!!...</h2>
  <button onClick={fectchData}> Fetch Data</button>
<br/>
  <button onClick={fectchIsError}> Fetch Data With Error</button>
  
<br/>
<button onClick={()=>setShow((prev)=> !prev)}>{show? "Hide":"Show"} </button>
<br/>
{show ? new Date().toISOString(): "Data Hidden"}
  </div>
)
};
