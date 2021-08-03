import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import addressReducer from './addressReducer';
export default combineReducers({
    auth:authReducer,
    cart:cartReducer,
    wishList:wishlistReducer,
    address:addressReducer,
})