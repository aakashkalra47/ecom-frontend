const cartReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_CART_ITEMS':
            return action.payload;
        case 'ADD_CART_ITEM':
            return [...state,action.payload];
        case 'REMOVE_CART_ITEM':
        case 'MOVE_TO_WISHLIST':
            const item=action.payload;
            console.log('1..state',state);
            const items=state.filter(e=>(e.productId!==item.productId||e.size!==item.size));
            return items;
        case 'CLEAR_CART':
                return [];
        default:
            return state;
    }
}
export default cartReducer;