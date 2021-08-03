const wishlistReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_WISHLIST_ITEMS':
            return action.payload;
        case 'ADD_WISHLIST_ITEM':
            return [...state,action.payload];
        case 'REMOVE_WISHLIST_ITEM':
            const items=state.items.filter(e=>(e.productId!==action.payload.productId));
            return items;
        default:
            return state;
    }
}
export default wishlistReducer;