export const cartReducer = (state , action) => {
    switch (action.type) {
        case "INITIALIZE_RESTAURANT" : 
            return {...action.payload , initialized:true};
        case "INITIALIZE_MENU" :
            return {...state , menuData : action.payload.menuData};
                
        case "ADD_TO_CART":
        default:
            return state;
    }
}

export const productReducer = (state ,action) => {
    switch (action.type){
        case "SEARCH_BY_QUERY":
            return {...state , searchQuery:action.payload};

        case "FILTER_BY_PRICE":
            return {...state , sort:action.payload};

        case "FILTER_BY_DELIVERY":
            return {...state , byFastDelivery:!state.byFastDelivery};

        case "CLEAR_FILTERS":
            return {
                searchQuery : "",
                byFastDelivery:false,
            }
        default :
         return state
    }
}