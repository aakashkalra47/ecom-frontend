import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import OrderDetail from './OrderDetail'
import { fetchOrders } from '../../actions/orderActions'
const OrderList = ({ orders }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrders())
  }, [])
  return (
    <div
      className="container"
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
    >
      {orders?.map((e) => (
        <div
          key={e._id}
          style={{
            padding: '1rem',
            width: '70%',
            border: '1px solid #d5ded7',
            borderRadius: '0.4rem'
          }}
        >
          <OrderDetail order={e} />
        </div>
      ))}
    </div>
  )
}
export default connect((state) => ({
  orders: state.order?.all_orders || []
}))(OrderList)
