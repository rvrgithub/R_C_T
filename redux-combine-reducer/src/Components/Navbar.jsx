import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

export const Navbar = () => {
    const navigate = useNavigate();
    const {isAuth ,logout} =useContext(AuthContext);
    const handleLoginClick=()=>{
    //  login sreen
    if(isAuth){
      // he wants to logout 
      logout();
      navigate("/");
    }
    else{
      // he wants to login
      navigate("/login")
    }
    }
  return (
    <div style={{padding :"10px" ,display:"flex",gap:"30px", margin:"auto"}}>Navbar
    <Link to="/">Home</Link>
   {isAuth &&  <Link to="/feeds">Feeds</Link>}
{isAuth && <Link to="/post">Post</Link>}
<button onClick={handleLoginClick}>
{/* Spacer */}
 {isAuth?"Logout":"Login"}</button>
    </div>
  )
}
