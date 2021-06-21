import React, { useEffect, useState } from "react";
import "./product.css";
import ProductCard from "./ProductCard";
export default function ProductList(props) {
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
      setProductList(props.products||[]);
  },[props.products]);
  return (
    <div className="product-list row">
      {productList.map((e) => (
        <ProductCard data={e} key={e._id} />
      ))}
    </div>
  );
}
