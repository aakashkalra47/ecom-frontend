import React from "react";
import { connect } from "react-redux";
import ProductList from "../components/products/ProductList";
function WishList(props) {
  console.log("1...props", props);
  return (
    <div className="container">
      <ProductList products={props.wishlist || []} />
    </div>
  );
}
export default connect((state) => ({ wishlist: state.wishlist }))(
  WishList
);
