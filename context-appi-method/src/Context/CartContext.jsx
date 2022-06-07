import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const { isAuthorized } = useContext(AuthContext);
  console.log("isAuthorized", isAuthorized);

  const addToCart = () => {
    setCount(count + 1);
  };

  const buy = () => {
    if (isAuthorized) {
      alert("can buy");
    } else {
      // console.log("connot buy without loggin in");
      alert("connot buy without loggin in");
    }
    // check if user is loggedin
    // if user is logged in then him to pay and buy
  };
  return (
    <CartContext.Provider value={{ count, addToCart, buy }}>
      {children}
    </CartContext.Provider>
  );
};
