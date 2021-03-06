import axios from "axios";
let url = process.env.REACT_APP_API;
export const login = (data, callback) => async (dispatch) => {
  const response = await axios({
    url: url + "/auth/login",
    method: "POST",
    data,
  });
  if (response.data) {
    localStorage.setItem("authorization", response.data.result.token);
    callback();
    dispatch({
      type: "SET_USER",
      payload: response.data.result.user,
    });
  }
};
export const signup = (data, callback) => async (dispatch) => {
  const response = await axios({
    url: url + "/auth/signup",
    method: "POST",
    data,
  });
  if (response.data) {
    callback();
    dispatch({
      type: "SET_USER",
      payload: response.data.result,
    });
  }
};
export const getUser = () => async (dispatch) => {
  const response = await axios({
    url: url + "/auth/user",
    method: "GET",
    headers: {
        authorization: localStorage.getItem("authorization"),
    },
  });
  if (response.data) {
    dispatch({
      type: "SET_USER",
      payload: response.data.result,
    });
  }
};
