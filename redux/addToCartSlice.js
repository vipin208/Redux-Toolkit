import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice=createSlice({
    name:'cartSlice',
    initialState:{
    count:0,
    data:[],
    isLoader:false
    },
    reducers:{
        increaseCount:(state)=>{
          state.count+=1
        },
        decrementCount:(state)=>{
           state.count-=1
        },
        arrCart:(state,action)=>{
          state.data=[...state.data,action.payload]
        },
        removeCart:(state,action)=>{
          state.data=state.data.filter((e)=>e.id!==action.payload.id)
        }
    }
})
export const{increaseCount,decrementCount,arrCart,removeCart}=addToCartSlice.actions
export default addToCartSlice.reducer