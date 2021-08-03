import axios from "axios";
let url = "http://localhost:5000";
const axiosConfing = {
  headers: {
    authorization: localStorage.getItem("authorization"),
  },
};
export const placeOrder = (data, callback) => async (dispatch) => {
  try {
    const response = await axios({
      url: url + `/order/`,
      method: "POST",
      ...axiosConfing,
      data,
    });
    if (response.data) {
      callback(response.data.result);
    }
  } catch (e) {
    console.log("1..e", e);
    if (e.response.data.error && e.response.data.error.status === 401) {
      // callback();
    }
  }
};
export const setOrderAddress = (data) => {
  return {
    type: "SET_CURRENT_ORDER_ADDRESS",
    payload: data,
  };
};
export const setOrderAmount = (data) => {
  return {
    type: "SET_CURRENT_ORDER_AMOUNT",
    payload: data,
  };
};
export const emptyCurrentOrder = () => {
  return {
    type: "UNSET_CURRENT_ORDER",
    payload: {},
  };
};
