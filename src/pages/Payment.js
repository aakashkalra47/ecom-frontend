import React from "react";
import { connect } from "react-redux";
import {placeOrder} from '../actions/orderActions';
function Payment(props) {
  return (
    <div className="container">
      <div className="my-3">
        <h3>Total Amount : 500</h3>
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
        <button className="btn btn-primary text-white" onClick={()=>{
            props.placeOrder({items:props.cart},(data)=>{
              alert('Order placed Successfully , Check Orders page for more Details',data);
            });
          }}>Confirm</button>
      </div>
    </div>
  );
}
export default connect((state) => ({ cart: state.cart }),{placeOrder})(Payment);
