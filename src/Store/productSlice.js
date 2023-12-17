import { createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error',
})
const productSlice = createSlice({
    name:'product',
    initialState : {
        data : [],
        Status : STATUSES.IDLE,
        searchQuery:"",
        fastDelivery:false,
    },
    reducers:{
        setProducts(state,action) {
            state.data = action.payload
        },

        setStatus(state,action){
            state.Status = action.payload
        },

        filterBySearch(state, action){
            state.searchQuery = action.payload;
        },

        filterByDelivery(state , action){
            state.fastDelivery = !state.fastDelivery
        },
        clearFilter(state){
            state.searchQuery = "";
            state.fastDelivery = false;
        }
    }
})

export const {setProducts , setStatus , filterBySearch , filterByDelivery , clearFilter} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => {
    return async function fecthProductThunk (dispatch,getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const jsonData = await res.json();
            dispatch(setProducts(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
            dispatch(setStatus(STATUSES.IDLE));
            // console.log(jsonData);
        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}