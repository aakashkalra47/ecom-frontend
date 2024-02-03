import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
export default function ProductList ({ products, noDataMsg }) {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    setProductList(products || [])
  }, [products])
  return (
    <div className="row col-12 pa-0 ma-0 flex-grow-1 container">
      {
        productList.length
          ? productList.map((e) => (
              <ProductCard data={e} key={e._id} />
          ))
          : (
            <div className="text-center my-5 d-flex align-items-center justify-content-center">
              <span className="h4 text-primary">{noDataMsg ?? "That's it for Now !!"}</span>
            </div>
            )
      }

    </div>
  )
}
