import React, { useEffect, useState } from "react";
import ProductList from "./../components/products/ProductList";
import { getProducts } from "../actions/productsActions";
import { useParams } from "react-router-dom";
import Filters from "../components/Filtters/Filters";
import Spinner from "../components/Spinner";
export default function Products(props) {
  let { category } = useParams();
  const [productList, setProductList] = useState([]);
  const [response, setResponse] = useState(false);
  useEffect(() => {
    getProducts("category", category).then((res) => {
      setProductList(res.data.result);
      setResponse(true);
    });
  }, [category]);
  return (
    <div>
      <div className="container">
        {productList.length ? (
          <div className="row">
            {/* <div style={{ margin: "0px", padding: "0px" }} className="col-3">
          <Filters/>
        </div> */}
            <div style={{ margin: "0px", padding: "0px" }} className="col-12">
              <ProductList products={productList} />
            </div>
          </div>
        ) : response ? (
            <div style={{display:'flex' ,justifyContent:'center'}}>
              <h2 style={{fontWeight:'100',color:'grey'}}>Currently No Prdouct available</h2>
            </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
