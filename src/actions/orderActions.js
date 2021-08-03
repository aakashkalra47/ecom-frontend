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
      dispatch({
        type: "CLEAR_CART",
        payload:{},
      });
      callback(response.data.result);
    }
  } catch (e) {
    if (e.response.data.error && e.response.data.error.status === 401) {
      // callback();
    }
  }
};