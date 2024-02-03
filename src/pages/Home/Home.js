import React from 'react'
import ProductList from './../../components/products/ProductList'
// import Filters from '../../components/Filtters/Filters';
const Home = () => {
  return (
    <div className="container row flex-grow-1">
      {/* <div style={{ margin: "0px", padding: "0px" }} className="col-3">
          <Filters/>
        </div> */}
      <ProductList />
    </div>
  )
}
export default Home
