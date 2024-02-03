const intitialState = {
  all_orders: [],
  current_order: {}
}
const orderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'SET_ALL_ORDERS':
      return { ...state, all_orders: action.payload }
    case 'SET_CURRENT_ORDER_ADDRESS':
      return { ...state, current_order: { ...state.current_order, address: action.payload } }
    case 'SET_CURRENT_ORDER_AMOUNT':
      return { ...state, current_order: { ...state.current_order, amount: action.payload } }
    case 'UNSET_CURRENT_ORDER':
      return { ...state, current_order: {} }
    default:
      return state
  }
}
export default orderReducer
