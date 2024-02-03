import axios from 'axios'
let url = process.env.REACT_APP_API; //eslint-disable-line
export const login = (data, callback) => async (dispatch) => {
  const res = await axios({
    url: url + '/auth/login',
    method: 'POST',
    data
  })
  const { result } = res.data
  if (result.token) {
    await localStorage.setItem('authorization', result.token)
  }
  callback()
  dispatch({
    type: 'SET_USER',
    payload: res.data.result.user
  })
}
export const signup = (data, callback) => async (dispatch) => {
  const res = await axios({
    url: url + '/auth/signup',
    method: 'POST',
    data
  })
  if (res.data) {
    callback()
    dispatch({
      type: 'SET_USER',
      payload: res.data.result
    })
  }
}
export const getUser = () => async (dispatch) => {
  const res = await axios({
    url: url + '/auth/user',
    method: 'GET',
    headers: {
      authorization: localStorage.getItem('authorization')
    }
  })
  if (res.data) {
    dispatch({
      type: 'SET_USER',
      payload: res.data.result
    })
  }
}
