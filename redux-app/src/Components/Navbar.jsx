import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const navigate = useNavigate();
  const  handleOnclick =(id)=>{
    if(id===1){
navigate("/products/1")
    }
  }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
       <button onClick={()=>handleOnclick(1)}>Go TO Products 1</button>
       <button onClick={()=>handleOnclick(2)}>Go To Product 2</button>


    </div>
  )
}
