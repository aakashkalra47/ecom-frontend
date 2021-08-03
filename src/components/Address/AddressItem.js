import React from "react";
import { connect } from "react-redux";
function AddressItem(props) {
  const { data } = props;
  return (
    <div>
      <p>{data.address} </p>
      <p>
        {data.city},{data.state}
      </p>
      <p>{data.pincode}</p>
    </div>
  );
}
export default connect()(AddressItem);
