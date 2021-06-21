import React, { useEffect, useState } from "react";
import ProductList from "./../components/products/ProductList";
import { getProducts } from "../actions/products";
import { useParams } from "react-router-dom";
import Filters from "../components/Filtters/Filters";
export default function Products(props) {
  let { category } = useParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts(category)
      .then((res) => {
        setProductList(res.data.result);
      })
      .catch((e) => {
        console.log("1..error", e);
      });
  }, [category]);
  return (
    <div>
    <div className="container">
      <div className="row">
        <div style={{ margin: "0px", padding: "0px" }} className="col-3">
          <Filters/>
        </div>
        <div style={{ margin: "0px", padding: "0px" }} className="col-9">
          <ProductList products={productList}/>
        </div>
      </div>
    </div>
  </div>
  );
}
