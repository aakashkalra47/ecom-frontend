import axios from "axios";
let url = "http://localhost:5000";
const axiosConfing={
  headers:{
    authorization:localStorage.getItem('authorization')
  }
}
export const addWishListItem = (productId,callback) => async (dispatch) => {
  try{
    console.log('1..axios config',axiosConfing);
    const response = await axios({
      url: url + "/wishlist/add",
      method: "PUT",
      data:{
        productId
      },
      ...axiosConfing
    });
    if (response.data.result) {
      dispatch({
        type: "SET_USER",
        payload: response.data.result,
      });
    }
  }
  catch(e){
    console.log('1...e',e.response.data)
    if(e.response.data.error.status===401)
      callback();
  }
};
export const removeWishListItem = (productId) => async (dispatch) => {
  const response = await axios({
    url: url + "/wishlist/remvoe",
    method: "PUT",
    data:{
      productId
    },
    ...axiosConfing
  });
  if (response.data) {
    dispatch({
      type: "SET_USER",
      payload: response.data.result,
    });
  }
};
