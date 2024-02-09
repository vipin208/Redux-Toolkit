import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:'cartCount',
    initialState:{
       count:0 ,
       isLoader:false
    },
    reducers:{
        increment:(state)=>{
          state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        }
    }
})
export const {increment,decrement}=countSlice.actions
export default countSlice.reducer