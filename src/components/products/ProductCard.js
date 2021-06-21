import React from "react";
import "./product.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addWishListItem, removeWishListItem } from "../../actions/wishlist";
function Card(props) {
  const { name, price, _id } = props.data;
  console.log("1....props.user", props.user);
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
    <div className="col-lg-4">
      <div
        className="icon-2 mt-4 mr-4"
        style={{ background: "white", marginLeft: "auto" }}
      >
        {props.user && props.user.wishlist.find((e) => e._id === _id) ? (
          <i className="fas fa-heart" onClick={removeItemFromWishlist} />
        ) : (
          <i className="far fa-heart" onClick={addItemToWishList} />
        )}
      </div>
      <div
        className="card"
        style={{ width: "18rem", border: "none" }}
        onClick={openProductDetails}
      >
        <div className="card-body">
          <img
            src="https://i.picsum.photos/id/670/200/200.jpg?hmac=r8TCUI8W_ykYaZnXA3SXAoh2eXVWEefFjjZ2VsLJBXg"
            className="card-img-top"
            alt="..."
          />
          <h6 className="card-text">{name} </h6>
          <h5 className="card-title">₹{price}</h5>
        </div>
      </div>
    </div>
  );
}
export default connect((state) => ({ user: state.auth.user }))(Card);
