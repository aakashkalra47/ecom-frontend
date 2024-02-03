import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setUser (state, { payload }) {
      state.user = payload
    }
  }
})
