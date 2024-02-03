import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import {
  addWishListItem,
  removeWishListItem
} from '../../actions/wishlistActions'
function ProductCard ({ data }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { name, price, _id, images } = data
  const { wishlist } = useSelector(({ wishlist }) => ({ wishlist }))
  const openProductDetails = () => {
    navigate(`/product/${_id}`)
  }
  const addItemToWishList = async () => {
    if (localStorage.getItem('authorization')) {
      dispatch(
        addWishListItem(_id, () => {
          navigate('/login')
        })
      )
    } else {
      navigate('/login')
    }
  }
  const removeItemFromWishlist = async () => {
    dispatch(removeWishListItem(_id))
  }
  return (
    <div className="col-lg-3 px-4 py-2 pos-relative">
      <div className="icon-2">
        {
          wishlist?.find((e) => e === _id)
            ? (
              <i
                className="fas fa-heart text-parimary"
                onClick={removeItemFromWishlist}
              />
              )
            : (
              <i
                className="far fa-heart text-primary"
                onClick={addItemToWishList}
              />
              )
        }
      </div>
      <Card variant='outlined' onClick={openProductDetails}>
        <CardMedia
          sx={{ height: 300 }}
          image={images[0] || ''}
          alt="..."
        />
        <CardContent>
          <Typography variant='subtitle1' component="div">{name}</Typography>
          <Typography variant='subtitle2'><b>₹</b> {price}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default ProductCard
