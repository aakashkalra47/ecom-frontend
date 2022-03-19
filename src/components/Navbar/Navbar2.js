import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
export default function Login() {
  return (
    <div className="nav-main-div">
      <div className="nav-flex">
        <div className="nav-item  text-center">
          <Link to="/" className="nav-item-text">
            Home
          </Link>
        </div>
        <div className="nav-item nav-item-pos">
          <div className="text-center">
            <Link to="#" className="nav-item-text">
              Men
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/men-tshirts">T-shirt</Link>
            <Link to="/men-shirts" className="nav-item-text">
              Shirts
            </Link>
            <Link to="/men-jeans" className="nav-item-text">
              Jeans
            </Link>
          </div>
        </div>
        <div className="nav-item nav-item-pos">
          <div className="text-center">
            <Link to="#" className="nav-item-text  text-center">
              Women
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/women-tshirts" className="nav-item-text">
              T-shirt
            </Link>
            <Link to="/women-full-sleeve-tshirts" className="nav-item-text">
              Full Sleeve T-Shirts
            </Link>
            <Link to="/women-jeans" className="nav-item-text">
              Jeans
            </Link>
          </div>
        </div>
        {/* <div className="nav-item nav-item-pos">
          <Link to="#" className="nav-item-text">
            Trending
          </Link>
          <div className="nav-dropdown">
            <Link to="#">T-shirt</Link>
            <Link to="#" className="nav-item-text">
              Shirts
            </Link>
            <Link to="#" className="nav-item-text">
              Jeans
            </Link>
          </div>
        </div> */}
        <Search />
        <div style={{ flex: 1 }}></div>
        <div
          className="nav-item nav-item-pos d-flex flex-row"
          style={{ color: "white", textAlign: "left" }}
        >
          <div className="col">
            <Link to="/user/wishlist" className="nav-item-text">
              <i className="far fa-heart"></i>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/user/cart"
              className="nav-item-text ml-3"
              style={{ color: "white", textAlign: "right" }}
            >
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
        <div className="nav-item nav-item-pos">
          <Link to="#" className="nav-item-text">
            Profile
          </Link>
          <div className="nav-dropdown">
            <Link to="#">Profile</Link>
            <Link to="/user/orders" className="nav-item-text">
              My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
