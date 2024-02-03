import React from 'react'
import { connect } from 'react-redux'
const AddressItem = ({ data }) => {
  return (
    <div>
      <p>{data.address} </p>
      <p>
        {data.city},{data.state}
      </p>
      <p>{data.pincode}</p>
    </div>
  )
}
export default connect()(AddressItem)
