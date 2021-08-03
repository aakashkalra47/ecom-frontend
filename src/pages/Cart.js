import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/productsActions";
import CartDetails from "../components/Cart/CartDetails";
import CartItems from "../components/Cart/CartItemList";
function Cart(props) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let ids = props.cart.map((e) => e.productId);
    console.log("1..items", ids);
    getProducts("ids", ids).then((res) => {
      console.log("1..response", res.data.result);
      let products = res.data.result.map((e) => {
        let item = props.cart.find((e2) => e2.productId === e._id);
        console.log("1..items", item, cartItems, e._id);
        return { product: e, size: item?.size };
      });
      console.log("1..products", products);
      setCartItems(products);
    });
  }, [props.cart]);
  console.log("1...cart", cartItems);
  const amount =
    cartItems.length > 0
      ? cartItems.reduce((accumulator, e) => accumulator + e.product.price, 0)
      : 0;
  let shipping = amount >= 500 ? 0 : 30;
  return (
    <div className="container row">
      <div className="col-lg-6">
        <CartItems cart={cartItems || []} />
      </div>
      <div className="col-lg-6">
        <CartDetails amount={amount} shipping={shipping} />
      </div>
    </div>
  );
}
export default connect((state) => ({ cart: state.cart }))(Cart);
