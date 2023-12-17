import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            const newItem = {...action.payload , price:Number(action.payload.price)}
            state.push(newItem);
        },
        removeFromCart(state,action){
            return state.filter((item) => item.id !== action.payload);
        },
        changeCartQuantity : (state , action) => {
            const {id , qty} = action.payload;
            const exitingItem = state.find(item => item.id === id);

            if(exitingItem){
                exitingItem.qty = Number(qty);
            }
        }
    }
})

export const {addToCart , removeFromCart , changeCartQuantity} = CartSlice.actions;
export default CartSlice.reducer;