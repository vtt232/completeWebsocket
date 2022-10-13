import { createAction } from "@reduxjs/toolkit"


export const ratingIncrement = createAction('Rating_Increment')
export const ratingDecrement = createAction('Rating_Decrement')

export const requestStudent = createAction('Students_Request')
export const requestStudentSuccess = createAction('Students_RequestSuccess')
export const requestStudentFailed = createAction('Students_RequestFailed')

export const modifiedStudent = createAction('Student_Modified')
export const modifiedStudentSuccess = createAction('Student_ModifiedSuccess')
export const modifiedStudentFailed = createAction('Student_ModifiedFailed')

export const requestSize = createAction('Size_Request')
export const requestSizeSuccess = createAction('Size_RequestSuccess')
export const requestSizeFailed = createAction('Size_RequestFailed')