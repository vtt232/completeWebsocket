import { createReducer } from "@reduxjs/toolkit"
import {requestStudent, requestStudentSuccess, requestStudentFailed, modifiedStudent
        ,modifiedStudentSuccess, modifiedStudentFailed} from "../actions/index"
const initialState = {
    students: [],
    loading: false,
    error: null
}




const studentReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(requestStudent.type, (state)=>{state.loading= true})
        .addCase(requestStudentSuccess.type, (state,action)=>{state.loading=false; state.students=action.payload})
        .addCase(requestStudentFailed.type, (state,action)=>{state.loading=false; state.error=action.payload})
        .addCase(modifiedStudent.type, (state)=>{state.loading=true})
        .addCase(modifiedStudentSuccess.type, (state, action)=>{state.loading=false;state.students=action.payload})
        .addCase(modifiedStudentFailed.type, (state,action)=>{state.loading=false; state.error=action.payload})
})

export default studentReducer;