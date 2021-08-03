import React, { useEffect } from "react";
import AddressItem from "./AddressItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAddresses } from "../../actions/addressActions";
import {setOrderAddress} from "../../actions/orderActions";
function AddressList(props) {
  const { addresses } = props;
  console.log("1..adress", addresses);
  useEffect(()=>{
    props.dispatch(getAddresses());
  },[])
  return (
    <div className="container mt-5">
      <div>
        <div>
          {addresses &&
            addresses.map((e) => (
              <div>
                <AddressItem key={e._id} data={e} />
                <Link to="/payment"  className="btn btn-primary" style={{ color: "white" }} 
                  onClick={()=>{
                    props.dispatch(setOrderAddress(e));
                  }}
                >Deliver Here</Link>
              </div>
            ))}
        </div>
        <div className="m-6">
          <Link to="/address/add">
            <button className="btn btn-primary" style={{ color: "white" }}>
              Add New Address
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default connect((state) => ({ addresses: state?.address }))(
  AddressList
);
