import React from "react";
import ProductList from "./../../components/products/ProductList";
import Filters from '../../components/Filtters/Filters';
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div style={{ margin: "0px", padding: "0px" }} className="col-3">
            <Filters/>
          </div>
          <div style={{ margin: "0px", padding: "0px" }} className="col-9">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}