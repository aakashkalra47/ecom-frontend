import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./reducers/index.js";
import thunk from "redux-thunk";
const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);
export default store;
