import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart, moveToWishList } from "../../actions/cartActions";
function CartItem(props) {
  const {size } = props.item;
  const product=props.item.productId
  return (
    <div className="m-3 w-100 p-3">
      <div>
        <h4>{product.name}</h4>
      </div>
      <div className="row">
        <div className="w-50">
          <img
            src={
              product.images[0] ||
              "https://i.picsum.photos/id/670/200/200.jpg?hmac=r8TCUI8W_ykYaZnXA3SXAoh2eXVWEefFjjZ2VsLJBXg"
            }
            alt=".."
          />
        </div>
        <div className="w-50">
          <h5>₹{product.price}</h5>
          <h5>Size-{size}</h5>
        </div>
      </div>
      <div className="d-flex w-100 mt-2">
        <div className="w-50">
          <button
            className="btn btn-primary w-100"
            style={{ color: "white" }}
            onClick={() => {
              props.dispatch(moveToWishList(product._id, size));
            }}
          >
            Move To Wishlist
          </button>
        </div>
        <div className="w-50">
          <button
            className="btn btn-primary w-100"
            style={{ color: "white" }}
            onClick={() => {
              props.dispatch(removeItemFromCart(product._id, size));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default connect()(CartItem);
