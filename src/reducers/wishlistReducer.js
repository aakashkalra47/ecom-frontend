const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WISHLIST_ITEMS':
      return action.payload
    case 'ADD_WISHLIST_ITEM':
      return [...state, action.payload]
    case 'REMOVE_WISHLIST_ITEM':
      return state.filter(e => (e !== action.payload))
    case 'MOVE_TO_WISHLIST':
      return [...state, action.payload.productId]
    default:
      return state
  }
}
export default wishlistReducer
