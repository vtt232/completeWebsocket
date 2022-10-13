import { createReducer } from "@reduxjs/toolkit"
import {ratingIncrement, ratingDecrement} from "../actions/index"

const ratingReducer = createReducer(0, (builder)=>{
    builder
        .addCase(ratingIncrement.type, (state) => state+1)
        .addCase(ratingDecrement.type, (state) => state>0? state-1 : state)
})

export default ratingReducer