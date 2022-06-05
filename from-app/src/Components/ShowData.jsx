import React from 'react'
import { useState } from 'react';
import { FormDetail } from './FormDetail';
import { SetData } from './SetData';

export const ShowData = () => {
    const [show , setShow] =useState(false);
  return (
    <div>ShowData
     <button onClick={()=>setShow((prev)=>!prev)
    }>{show ? "Shpw Data" : "Hide Data"}</button>
    {show ? <FormDetail/> :<SetData/>}</div>
  )
}

