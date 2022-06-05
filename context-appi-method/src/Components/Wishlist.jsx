import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const Wishlist = () => {
  const {count} = useContext(CartContext)
  return (
    <div>Wishlist :{count}</div>
  )
}
