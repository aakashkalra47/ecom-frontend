import axios from "axios";
let url = "http://localhost:5000";
const axiosConfing={
  headers:{
    authorization:localStorage.getItem('authorization')
  }
}
export const getAddresses = () => async (dispatch) => {
  try{
    console.log('1..axios config',axiosConfing);
    const response = await axios({
      url: url + "/address",
      method: "GET",
      ...axiosConfing
    });
    if (response.data.result) {
      dispatch({
        type: "SET_ADDRESSES",
        payload: response.data.result,
      });
    }
  }
  catch(e){
    console.log('1...e',e.response.data)
    if(e.response.data.error&&e.response.data.error.status===401){
      // callback();
    }
  }
};
export const addAddress = (data,callback) => async (dispatch) => {
  try{
    console.log('1..axios config',axiosConfing);
    const response = await axios({
      url: url + "/address",
      method: "POST",
      data,
      ...axiosConfing
    });
    if (response.data.result) {
      dispatch({
        type: "ADD_ADDRESS",
        payload: response.data.result,
      });
      callback();
    }
  }
  catch(e){
    console.log('1...e',e.response.data)
    if(e.response.data.error&&e.response.data.error.status===401)
      callback();
  }
};
export const removeAddress = (addressId) => async (dispatch) => {
  const response = await axios({
    url: url + "/address/remvoe",
    method: "PUT",
    data:{
        addressId
    },
    ...axiosConfing
  });
  if (response.data) {
    dispatch({
      type: "REMOVE_ADDRESS",
      payload: response.data.result,
    });
  }
};
