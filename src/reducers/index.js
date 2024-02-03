import authReducer from './authReducer'
import cartReducer from './cartReducer'
import wishlistReducer from './wishlistReducer'
import addressReducer from './addressReducer'
import orderReducer from './orderReducer'
export default {
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  address: addressReducer,
  order: orderReducer
}
