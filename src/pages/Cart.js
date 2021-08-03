import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getCartItems } from "../actions/cartActions";
import CartDetails from "../components/Cart/CartDetails";
import CartItems from "../components/Cart/CartItemList";
function Cart(props) {
  console.log("1...cart", props.cart);
  // useEffect(()=>{
  //   props.dispatch(getCartItems());
  // },[]);
  const amount =
    props.cart?.items?.length > 0
      ? props.cart.reduce((accumulator, e) => accumulator + e.product.price, 0)
      : 0;
  let shipping = amount >= 500 ? 0 : 30;
  return (
    <div className="container row">
      <div className="col-lg-6">
        <CartItems cart={props.cart || []} />
      </div>
      <div className="col-lg-6">
      <CartDetails amount={amount} shipping={shipping} />
      </div>
    </div>
  );
}
export default connect((state) => ({ cart: state.cart }))(Cart);
