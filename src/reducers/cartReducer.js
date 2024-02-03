const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_CART_ITEMS':
      return payload
    case 'ADD_CART_ITEM':
      return [...state, payload]
    case 'REMOVE_CART_ITEM':
    case 'MOVE_TO_WISHLIST':
      return state.filter(e => (e.productId !== payload.productId || e.size !== payload.size))
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}
export default cartReducer
