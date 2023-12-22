import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            state.push({...action.payload , qty:1});
        },
        removeFromCart(state,action){
            return state.filter((item) => item.id !== action.payload);
        },
        changeCartQuantity : (state , action) => {
            // return state.filter((c)=> c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty);
            const {id,qty} = action.payload;
            const product = state.find((c)=> c.id === id);
            if(product){
                product.qty = qty;
            }
        },
    }
})

export const {addToCart , removeFromCart , changeCartQuantity} = CartSlice.actions;
export default CartSlice.reducer;