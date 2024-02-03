import React from 'react'
const OrderDetail = ({ order }) => {
  return (
    <div>
      {order.items.map((e) => (
        <div key={e.productId}>
          <h4>{e.productId.name}</h4>
          <h5>size-{e.size}</h5>
        </div>
      ))}
      <div>Amount - {order.amount}</div>
      <div>Payment Mode - {order.paymentMode}</div>
    </div>
  )
}
export default OrderDetail
