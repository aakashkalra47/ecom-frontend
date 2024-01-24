import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { getUser } from "./actions/authActions";
import Wishlist from "../src/pages/WishList";
import Cart from "../src/pages/Cart";
import AddressForm from "./components/Address/AdressForm";
import AddressList from "./components/Address/AddressList";
import Payment from "./pages/Payment";
import { getWishListItems } from "./actions/wishlistActions";
import { getCartItems } from "./actions/cartActions";
import OrderList from "./components/Order/orderList";
import Footer from "./components/Footer";
import { createTheme ,ThemeProvider} from "@mui/material";
import palette from './styles/sass/_variables.module.scss' 
const theme=createTheme({
  palette:{
    primary:{
      main: palette.primary,
    }
  }
})
function App() {
  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      store.dispatch(getUser());
      store.dispatch(getWishListItems());
      store.dispatch(getCartItems());
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div style={{ fontFamily: "Arial,sans-serif",minHeight:'100vh',display:'flex',flexDirection:'column' }}>
            <Navbar/>
            <div className="flex-grow-1 d-flex flex-column">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<SignUp/>} />
                <Route exact path="/product/:id" element={<ProductDetail/>} />
                <Route exact path="/user/wishlist" element={<Wishlist/>} />
                <Route exact path="/user/cart" element={<Cart/>} />
                <Route exact path="/user/orders" element={<OrderList/>} />
                <Route exact path="/order" element={<AddressList/>} />
                <Route exact path="/address/add" element={<AddressForm/>} />
                <Route exact path="/payment" element={<Payment/>} />
                <Route exact path="/:category" element={<Products/>} />
              </Routes>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
