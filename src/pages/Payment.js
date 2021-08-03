import React from "react";
import { connect } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {placeOrder,emptyCurrentOrder} from '../actions/orderActions';
import {clearCart} from '../actions/cartActions';
import { useHistory } from 'react-router-dom';

function Payment(props) {
  const history = useHistory();
  const orderDetails=props.order;
  orderDetails.items=props.cart;
  const order=()=>{
    props.dispatch(placeOrder(orderDetails,(data)=>{
      props.dispatch(emptyCurrentOrder());
      props.dispatch(clearCart());
      history.replace('/orders');
    }));
  }
  return (
    <div className="container">
      <div className="my-3">
        <h3>Total Amount : {orderDetails.amount}</h3>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  checked
                />
                <label class="form-check-label" for="paymentMethod">
                  Cash On Delivery
                </label>
              </div>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod1"
                  disabled
                />
                <label class="form-check-label" for="paymentMethod1">
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
  );
}
export default connect((state) => ({ cart: state.cart,order:state.order.current_order }))(Payment);
