import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";
export const CartContext =createContext();
export const CartProvider =({children})=>{
    const [count ,setCount] = useState(0);

    const {isAuthurized} =useContext(AuthContext);
    const addToCart=()=>{
        setCount(count+1);
    }
    const buy =()=>{
if(isAuthurized){
    console.log("can buy");
}
else{
    console.log("connot buy without loggin in");
}
// check if user is loggedin
// if user is logged in then him to pay and buy
    }
    return (
        <CartContext.Provider value={{count,addToCart ,buy}}>{children}</CartContext.Provider>
    )
}