import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {setOrderAmount} from '../../actions/orderActions';
function  CartDetails(props) {
  const history=useHistory();
  return (
    <div className="container mt-5 mx-3">
      <table class="table">
        <thead>
          <tr >
            <th className="text-center w-100" scope="col">Cart Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cart Amount</th>
            <td>{props.amount}</td>
          </tr>
          <tr>
            <th scope="row">Shipping Charges</th>
            <td>{props.shipping === 0 ? "FREE" : props.shipping}</td>
          </tr>
          <tr>
            <th scope="row">Total Amount</th>
            <td>{props.amount + props.shipping}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary w-100" style={{color:'white'}} onClick={()=>{
        props.dispatch(setOrderAmount(props.amount + props.shipping));
        history.push('/order')
      }}>Place Order</button>
    </div>
  );
}
export default connect()(CartDetails);
