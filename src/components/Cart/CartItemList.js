import React from 'react'
import CartItem from './CartItem'
const CartItemsList = ({ cart }) => {
  return (
    <div className="container mt-5">
      {cart?.map((e) => (
        <CartItem key={e._id} item={e} size={e.size} product={e.product} />
      ))}
    </div>
  )
}
export default CartItemsList
