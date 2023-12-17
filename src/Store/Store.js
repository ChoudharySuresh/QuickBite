import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import CartSlice from "./CartSlice";

const Store = configureStore({
    reducer:{
        product:productSlice,
        Cart:CartSlice
    }
})

export default Store