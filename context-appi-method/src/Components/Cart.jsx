import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const Cart = () => {
  const {addToCart}=useContext(CartContext);
  return (
    <div>Cart
    <button onClick={addToCart}>ADd to Cart</button>
    </div>
  )
}
