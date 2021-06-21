import React from "react";
import CartItem from './CartItem';
export default function CartItemsList(props) {
  const cartItems=props.cart;
  return <div className="container mt-5">
      {cartItems.map(e=>(
          <CartItem key={e._id} item={e}/>
      ))}
  </div>;
}
