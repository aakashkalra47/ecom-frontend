import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../../actions/productsActions'
import { addItemToCart } from '../../actions/cartActions'
import _ from 'lodash'
import Spinner from '../Spinner'
import {
  addWishListItem,
  removeWishListItem
} from '../../actions/wishlistActions'
import { connect } from 'react-redux'
import Carousel from './Carousel'
const DetailedProduct = (props) => {
  const params = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    getProductById(params.id).then((res) => {
      setProduct(res.data.result)
    })
  }, [])
  const addItemToWishList = async () => {
    if (localStorage.getItem('authorization')) {
      props.dispatch(
        addWishListItem(product._id, () => {
          navigate('/login')
        })
      )
    } else {
      navigate('/login')
    }
  }
  const removeItemFromWishlist = async () => {
    if (localStorage.getItem('authorization')) {
      props.dispatch(removeWishListItem(product._id))
    } else {
      navigate('/login')
    }
  }
  const [selectedSize, setSelectedSize] = React.useState('')
  const [error, SetError] = useState('')
  const addToCart = () => {
    if (selectedSize) {
      if (localStorage.getItem('authorization')) {
        props.dispatch(
          addItemToCart(
            {
              productId: product._id,
              size: selectedSize
            },
            () => {
              navigate('/login')
            }
          )
        )
      } else {
        navigate('/login')
      }
    } else {
      SetError('Please Select Size')
    }
  }
  // const checkAvailablitySizes=()
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  return _.isEmpty(product)
    ? (
      <Spinner />
      )
    : (
      <div className="row container mt-3" style={{ margin: 'auto' }}>
        <div className="col-lg-6 pb-16">
          <Carousel images={product.images}/>
        </div>
        <div className="col-lg-6">
          <div>
            <h3>{product.name}</h3>
            <h3>₹{product.price}</h3>
          </div>
          <div className="pd-3">
            <h5>Select Size</h5>
            <div className="row">
              {sizes?.map((e) => {
                const size = product.sizes?.find((size) => size.name === e)
                const available = size && size?.quantity > 0
                return (
                  <div key={e}
                    className={`col-lg-2 m-1 size-chart ${available ? 'available' : 'not-available'
                      } ${selectedSize === e && 'selected'}`}
                    onClick={() => {
                      if (available) {
                        setSelectedSize(e)
                        SetError('')
                      }
                    }}
                  >
                    <span>{e}</span>
                  </div>
                )
              })}
              {error && (
                <p className="text-danger">
                  <small>{error}</small>
                </p>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-lg-2 icon px-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {props.wishlist?.find((e) => e === product._id)
                ? (
                  <i
                    className="fas fa-heart text-primary"
                    onClick={removeItemFromWishlist}
                  />
                  )
                : (
                  <i
                    className="far fa-heart  text-primary"
                    onClick={addItemToWishList}
                  />
                  )}
            </div>
            <div className="col-lg-10 x-3">
              {props.cart.find((e) => e.productId === product._id)
                ? (
                  <button
                    className="btn btn-primary w-100"
                    style={{ color: 'white' }}
                    onClick={() => {
                      navigate('/user/cart')
                    }}
                  >
                    Go To Cart
                  </button>
                  )
                : (
                  <button
                    className="btn btn-primary w-100"
                    style={{ color: 'white' }}
                    onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                  )}
            </div>
            <div className="my-3 px-1">
              <p className="text-muted">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      )
}
export default connect((state) => ({
  user: state.auth?.user || [],
  cart: state.cart || [],
  wishlist: state.wishlist || []
}))(DetailedProduct)
