import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/productsActions'
import CartDetails from '../components/Cart/CartDetails'
import CartItems from '../components/Cart/CartItemList'
const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    const ids = cart.map((e) => e.productId)
    getProducts('ids', ids).then((res) => {
      const products = res.data.result.map((e) => {
        const item = cart.find((e2) => e2.productId === e._id)
        return { product: e, size: item?.size }
      })
      setCartItems(products)
    })
  }, [cart])
  const amount =
    cartItems.length > 0
      ? cartItems.reduce((accumulator, e) => accumulator + e.product.price, 0)
      : 0
  const shipping = amount >= 500 ? 0 : 30
  return (
    <div className="container row">
      <div className="col-lg-6">
        <CartItems cart={cartItems || []} />
      </div>
      <div className="col-lg-6">
        <CartDetails amount={amount} shipping={shipping} />
      </div>
    </div>
  )
}
export default connect((state) => ({ cart: state.cart }))(Cart)
