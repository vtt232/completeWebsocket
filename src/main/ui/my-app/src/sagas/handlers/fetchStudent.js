import {call,put,takeEvery} from "redux-saga/effects"

import {fetchGetStudent, fetchModifiedStudent} from "../requests/fetchStudents"
import {requestStudent, requestStudentSuccess, requestStudentFailed, modifiedStudent
    ,modifiedStudentSuccess, modifiedStudentFailed} from "../actions/index"



function* handleGetStudents(action) {
    try {
        const students = yield call(fetchGetStudent, action.payload)
        yield put(requestStudentSuccess(students))
    }catch(err) {
        yield put(requestStudentFailed(err.message))
    }
}

function* handleModifiedStudent(action) {
    console.log(action)
    try {
        const students = yield call(fetchModifiedStudent, action.payload)
        yield put(modifiedStudentSuccess(students))
    }catch(err) {
        yield put(modifiedStudentFailed(err.message))
    }
    
}

function* watcherUsersSaga() {
    yield takeEvery(requestStudent, handleGetStudents)
    yield takeEvery(modifiedStudent, handleModifiedStudent)
}

export default watcherUsersSaga
