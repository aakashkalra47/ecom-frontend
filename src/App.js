import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar2";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import "./styles/sass/index.scss";
import store from "./store";
import ProductDetail from "./components/products/DetailedProduct";
import "bootstrap";
import { useEffect } from "react";
import { getUser } from "./actions/auth";
import Wishlist from "../src/pages/WishList";
import Cart from "../src/pages/Cart";
// import { connect } from "react-redux";
function App(props) {
  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      store.dispatch(getUser());
    }
  });
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/:category" component={Products} />
            <Route exact path="/" component={Home} />
            <Route exact path="/user/wishlist" component={Wishlist} />
            <Route exact path="/user/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
