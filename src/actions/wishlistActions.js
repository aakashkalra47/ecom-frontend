import axios from "axios";
let url = "http://localhost:5000";
const axiosConfing={
  headers:{
    authorization:localStorage.getItem('authorization')
  }
}

export const getWishListItems = () => async (dispatch) => {
  try{
    console.log('1..axios config',axiosConfing);
    const response = await axios({
      url: url + "/wishlist/add",
      method: "GET",
      ...axiosConfing
    });
    if (response.data.result) {
      dispatch({
        type: "SET_WISHLIST_ITEMS",
        payload: response.data.result,
      });
    }
  }
  catch(e){
    console.log('1...e',e)
    // if(e.response.data.error.status===401)
    //   callback();
  }
};

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
        type: "ADD_WISHLIST_ITEM",
        payload: response.data.result,
      });
    }
  }
  catch(e){
    console.log('1...e',e)
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
      type: "REMOVE_WISHLIST_ITEM",
      payload: response.data.result,
    });
  }
};
