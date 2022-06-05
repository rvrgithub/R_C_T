import React from 'react'
import { Cart } from './Cart'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
export const Product = () => {
  // const condition =true;
  const {isAuthorized} = useContext(AuthContext);
   return (
    <div>Product : {isAuthorized ? "LoggedIN" :"LoggedOut"}
    <Cart/>
    </div>
  )
}
