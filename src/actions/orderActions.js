import axios from 'axios'
const url = process.env.REACT_APP_API
const axiosConfing = () => ({
  headers: {
    authorization: localStorage.getItem('authorization')
  }
})
export const placeOrder = (data, callback) => async (dispatch) => {
  try {
    const response = await axios({
      url: url + '/order/',
      method: 'POST',
      ...axiosConfing(),
      data
    })
    if (response.data) {
      callback(response.data.result)
    }
  } catch (e) {
    if (e.response.data.error && e.response.data.error.status === 401) {
      // callback();
    }
  }
}
export const setOrderAddress = (data) => {
  return {
    type: 'SET_CURRENT_ORDER_ADDRESS',
    payload: data
  }
}
export const setOrderAmount = (data) => {
  return {
    type: 'SET_CURRENT_ORDER_AMOUNT',
    payload: data
  }
}
export const emptyCurrentOrder = () => {
  return {
    type: 'UNSET_CURRENT_ORDER',
    payload: {}
  }
}
export const fetchOrders = () => async (dispatch) => {
  const response = await axios({
    url: url + '/order/',
    method: 'GET',
    ...axiosConfing()
  })
  if (response.data.result) {
    dispatch({
      type: 'SET_ALL_ORDERS',
      payload: response.data.result
    })
  }
}
