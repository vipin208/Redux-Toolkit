import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import countSlice from "./countSlice";
import addToCartSlice from "./addToCartSlice";
export const store=configureStore({
    reducer:{
       product:productReducer,
       countFromStore:countSlice,
       addTocart:addToCartSlice
    }
})
