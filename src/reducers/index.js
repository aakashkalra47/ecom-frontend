import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import addressReducer from './addressReducer';
import orderReducer from './orderReducer';
export default combineReducers({
    auth:authReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
    address:addressReducer,
    order:orderReducer,
})