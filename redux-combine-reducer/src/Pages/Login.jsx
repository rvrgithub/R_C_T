import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const Login = () => {
  const [loginCreds, setLoginCreds] =useState({});
  const {login} =useContext(AuthContext);
  // const navigate = useNavigate()
const handleOnChange=(e)=>{
  const {name ,value} = e.target;
  setLoginCreds({
    ...loginCreds,
    [name]:value,
  })
  console.log(name,value)
  
} 
const handleSubmit=(e)=>{
e.preventDefault();
login();
// navigate("/feeds")
// TODO
}
  return (
    <div>Login
    <form style={{
      display:"flex",
      flexDirection:"column",
      margin:"auto",
      maxWidth:"300px",
      // maxHeight:"100px",
      gap:"10px",

    }}
    onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder='Enter Email'
    onChange={handleOnChange}
      />
      <input type="password" name="password" 
      placeholder='Enter Password'
         onChange={handleOnChange}
      />
      <input type="submit" value="Submit"/>

    </form>
    </div>
  )
}
