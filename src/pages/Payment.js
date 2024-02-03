import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { placeOrder, emptyCurrentOrder } from '../actions/orderActions'
import { clearCart } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'

const Payment = (props) => {
  const navigate = useNavigate()
  const orderDetails = props.order
  orderDetails.items = props.cart
  const dispatch = useDispatch()
  const order = () => {
    dispatch(placeOrder(orderDetails, (data) => {
      dispatch(emptyCurrentOrder())
      dispatch(clearCart())
      navigate('/user/orders', { replace: true })
    }))
  }
  return (
    <div className="container">
      <div className="my-3">
        <h3>Total Amount : {orderDetails.amount}</h3>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  checked
                />
                <label className="form-check-label" htmlFor="paymentMethod">
                  Cash On Delivery
                </label>
              </div>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod1"
                  disabled
                />
                <label className="form-check-label" htmlFor="paymentMethod1">
                  Card
                </label>
              </div>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="my-3">
        <button className="btn btn-primary text-white" onClick={order}>Confirm</button>
      </div>
    </div>
  )
}
export default connect((state) => ({ cart: state.cart, order: state.order.current_order }))(Payment)
