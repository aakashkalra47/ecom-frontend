import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import { useParams, useHistory } from "react-router-dom";
import { getProductById } from "../../actions/productsActions";
import { addItemToCart } from "../../actions/cartActions";
import {
  addWishListItem,
  removeWishListItem,
} from "../../actions/wishlistActions";
import { connect } from "react-redux";
function DetailedProduct(props) {
  const params = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory();
  useEffect(() => {
    getProductById(params.id).then((res) => {
      setProduct(res.data.result);
    });
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    // console.log('img',document.getElementById("myModal"));
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
  }, []);
  const addItemToWishList = async () => {
    if (localStorage.getItem("authorization")) {
      props.dispatch(
        addWishListItem(product._id, () => {
          history.push("/login");
        })
      );
    } else {
      history.push("/login");
    }
  };
  const removeItemFromWishlist = async () => {
    if (localStorage.getItem("authorization")) {
      props.dispatch(removeWishListItem(product._id));
    } else {
      history.push("/login");
    }
  };
  const [selectedSize, setSelectedSize] = React.useState("");
  const [error, SetError] = useState("");
  const addToCart = () => {
    if (selectedSize) {
      if (localStorage.getItem("authorization")) {
        props.dispatch(
          addItemToCart(
            {
              productId: product._id,
              size: selectedSize,
            },
            () => {
              history.push("/login");
            }
          )
        );
      } else {
        history.push("/login");
      }
    } else {
      SetError("Please Select Size");
    }
  };
  // const checkAvailablitySizes=()
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className="row container mt-3" style={{ margin: "auto" }}>
      {/* <div className="col-lg-1">
        {product.images?.map((e) => (
          <div className="row">
            <img src={e} alt="" style={{ flex: 1 }} />
          </div>
        ))}
      </div> */}
      <div className="col-lg-5 row">
        <img
          src={(product.images && product.images[0]) || ""}
          alt=""
          style={{ flex: 1 }}
          id="myImg"
        />
      </div>
      <div className="col-lg-6">
        <div>
          <h4>{product.name}</h4>
          <h3>₹{product.price}</h3>
        </div>
        <div className="pd-3">
          <h5>Select Size</h5>
          <div className="row">
            {sizes?.map((e) => {
              const size = product.sizes?.find((size) => size.name === e);
              const available = size && size?.quantity > 0;
              return (
                <div
                  className={`col-lg-2 m-1 size-chart ${
                    available ? "available" : "not-available"
                  } ${selectedSize === e && "selected"}`}
                  onClick={() => {
                    if (available) {
                      setSelectedSize(e);
                      SetError("");
                    }
                  }}
                >
                  <span>{e}</span>
                </div>
              );
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
            className="col-lg-3 icon px-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.wishlist?.find((e) => e === product._id) ? (
              <i
                className="fas fa-heart text-primary"
                onClick={removeItemFromWishlist}
              />
            ) : (
              <i
                className="far fa-heart  text-primary"
                onClick={addItemToWishList}
              />
            )}
          </div>
          <div className="col-lg-9 x-3">
            {props.cart.find((e) => e.productId === product._id) ? (
              <button
                className="btn btn-primary w-100"
                style={{ color: "white" }}
                onClick={() => {
                  history.push("/user/cart");
                }}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="btn btn-primary w-100"
                style={{ color: "white" }}
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
      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />
      </div>
    </div>
  );
}
export default connect((state) => ({
  user: state.auth.user || [],
  cart: state.cart || [],
  wishlist: state.wishlist || [],
}))(DetailedProduct);
