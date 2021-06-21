import axios from "axios";
let url = "http://localhost:5000";
const axiosConfing={
    headers:{
      authorization:localStorage.getItem('authorization')
    }
  }
export const addItemToCart = (data,callback) => async (dispatch) => {
  try{

    const response = await axios({
      url: url + `/cart/add/`,
      method: "PUT",
      ...axiosConfing,
      data
    });
    if (response.data) {
      dispatch({
        type: "SET_USER",
        payload: response.data.result,
      });
    }
  }
  catch(e){
    if(e.response.data.error&&e.response.data.error.status===401){
      callback();
    }
  }
};
export const removeItemFromCart = (id) => async (dispatch) => {
    const response = await axios({
      url: url + `/cart/remove/:${id}`,
      method: "PUT",
      ...axiosConfing
    });
    if (response.data) {
      dispatch({
        type: "SET_USER",
        payload: response.data.result,
      });
    }
  };