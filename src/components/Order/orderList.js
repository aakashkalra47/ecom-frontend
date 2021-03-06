import React, { useEffect } from "react";
import { connect } from "react-redux";
import OrderDetail from "./OrderDetail";
import { fetchOrders } from "../../actions/orderActions";
const OrderList = (props) => {
  const { orders } = props;
  useEffect(() => {
    props.dispatch(fetchOrders());
  }, []);
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {orders?.map((e) => (
        <div
          style={{
            padding: "1rem",
            width: "70%",
            border: "1px solid #d5ded7",
            borderRadius: "0.4rem",
          }}
        >
          <OrderDetail order={e} key={e._id} />
        </div>
      ))}
    </div>
  );
};
export default connect((state) => ({
  orders: state.order?.all_orders || [],
}))(OrderList);
