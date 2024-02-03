import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/products/ProductList'
import { getProducts } from './../actions/productsActions'
const WishList = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts('ids', props.wishlist).then((res) => {
      setProducts(res.data.result)
    })
  }, [props.wishlist])
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ flexGrow: 1 }} >
      <ProductList products={products || []} noDataMsg="No Products in the wishlist." />
    </div>
  )
}
export default connect((state) => ({ wishlist: state.wishlist }))(
  WishList
)
