import React from 'react'
import { Wishlist } from './Wishlist'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { ThemeConetext } from '../Context/ThemeConext';
export const Navbar = () => {
  const {isAuthorized,login,logout} =useContext(AuthContext);
  const {buy} = useContext(CartContext)
  const {isLight ,toggleTheme} =useContext(ThemeConetext)
  return (
    <div>Navbar
    <button onClick={()=>{
      if( isAuthorized) {
        logout();
      }
      else{
        login("R","Z")
      }
    }}>
      {isAuthorized ?"Logout":"Login"}
    </button>
    <button onClick={buy}>Buy </button>
<button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : "light"}`}</button>
    {isAuthorized &&<Wishlist/>}
    </div>
  )
}
