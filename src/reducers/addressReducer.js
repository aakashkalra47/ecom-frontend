const addressReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_ADDRESSES':
            return action.payload;
        case 'ADD_ADDRESS':
            return [...state,action.payload];
        case 'REMOVE_ADDRESS':
            return [...state,action.payload];
        default:
            return state;
    }
}
export default addressReducer;