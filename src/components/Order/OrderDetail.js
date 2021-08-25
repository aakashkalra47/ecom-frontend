import React from "react";
const OrderDetail = (props) => {
  const { order } = props;
  return (
    <div>
      {order.items.map((e) => (
        <div>
          <h4>{e.productId.name}</h4>
          <h5>size-{e.size}</h5>
        </div>
      ))}
      <div>Amount - {order.amount}</div>
      <div>Payment Mode - {order.paymentMode}</div>
    </div>
  );
};
export default OrderDetail;
