import { createReducer } from "@reduxjs/toolkit"
import {requestSize,requestSizeSuccess ,requestSizeFailed} from "../actions/index"

const initialState = {
    size: 0,
    loading: false,
    error: null
}


const sizeReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(requestSize.type, (state) => {state.loading= true})
        .addCase(requestSizeSuccess.type, (state, action) => {state.loading=false; state.size=action.payload})
        .addCase(requestSizeFailed.type, (state,action)=>{state.loading=false; state.error=action.payload})
})

export default sizeReducer