import axios from "axios";
let url = process.env.REACT_APP_API;
const axiosConfing = {
  headers: {
    authorization: localStorage.getItem("authorization"),
  },
};
export const getCartItems = (data, callback) => async (dispatch) => {
  try {
    const response = await axios({
      url: url + `/cart/`,
      method: "GET",
      ...axiosConfing,
      data,
    });
    if (response.data) {
      dispatch({
        type: "SET_CART_ITEMS",
        payload: response.data.result,
      });
    }
  } catch (e) {
    if (e.response.data.error && e.response.data.error.status === 401) {
      callback();
    }
  }
};
export const addItemToCart = (data, callback) => async (dispatch) => {
  try {
    const response = await axios({
      url: url + `/cart/add/`,
      method: "PUT",
      ...axiosConfing,
      data,
    });
    if (response.data) {
      dispatch({
        type: "ADD_CART_ITEM",
        payload: response.data.result,
      });
    }
  } catch (e) {
    if (e.response.data.error && e.response.data.error.status === 401) {
      callback();
    }
  }
};
export const removeItemFromCart = (id, size) => async (dispatch) => {
  const response = await axios({
    url: url + `/cart/remove`,
    method: "PUT",
    data: {
      size,
      productId: id,
    },
    ...axiosConfing,
  });
  if (response.data) {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: response.data.result,
    });
  }
};
export const moveToWishList = (id, size) => async (dispatch) => {
  const response = await axios({
    url: url + `/cart/move`,
    method: "PUT",
    data: {
      size,
      productId: id,
    },
    ...axiosConfing,
  });
  if (response.data) {
    dispatch({
      type: "MOVE_TO_WISHLIST",
      payload: response.data.result,
    });
  }
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
    payload: {},
  };
};
