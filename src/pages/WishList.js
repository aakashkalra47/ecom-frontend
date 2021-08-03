import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductList from "../components/products/ProductList";
import {getProducts} from './../actions/productsActions';
function WishList(props) {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    getProducts('ids',props.wishlist).then((res)=>{
      setProducts(res.data.result);
    });
  },[props.wishlist]);
  return (
    <div className="container">
      <ProductList products={products || []} />
    </div>
  );
}
export default connect((state) => ({ wishlist: state.wishlist }))(
  WishList
);
