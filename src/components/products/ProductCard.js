import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  addWishListItem,
  removeWishListItem,
} from "../../actions/wishlistActions";
function Card(props) {
  const { name, price, _id,images } = props.data;
  const history = useHistory();
  const openProductDetails = () => {
    history.push(`/product/${_id}`);
  };
  const addItemToWishList = async () => {
    if (localStorage.getItem("authorization")) {
      props.dispatch(
        addWishListItem(_id, () => {
          history.push("/login");
        })
      );
    } else {
      history.push("/login");
    }
  };
  const removeItemFromWishlist = async () => {
    if (localStorage.getItem("authorization")) {
      props.dispatch(removeWishListItem(_id));
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="col-lg-3 p-1 my-0">
      <div className="product__card">
        <div className="card-body pos-relative" >
          <div
            className="icon-2"
          >
            {props.wishlist?.find((e) => e === _id) ? (
              <i
                className="fas fa-heart text-parimary"
                onClick={removeItemFromWishlist}
              />
            ) : (
              <i
                className="far fa-heart text-primary"
                onClick={addItemToWishList}
              />
            )}
          </div>
          <img
            onClick={openProductDetails}
            src={images[0]||""}
            className="card-img-top"
            alt="..."
          />
          <h6 className="card-text my-3">{name} </h6>
          <h6>
            <b>₹</b> {price}
          </h6>
        </div>
      </div>
    </div>
  );
}
export default connect((state) => ({
  user: state.auth.user,
  wishlist: state.wishlist,
  cart: state.cart,
}))(Card);
