import React from 'react'
import Addresses from '../components/Address/AddressList'
const Products = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div style={{ margin: '0px', padding: '0px' }} className="col-3">
            <Addresses />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products
