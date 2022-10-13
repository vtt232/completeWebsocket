import {call,put,takeEvery} from "redux-saga/effects"

import fetchGetSize from "../requests/fetchSize"
import {requestSize,requestSizeSuccess ,requestSizeFailed} from "../actions/index"



function* handleGetSize() {
    try {
        const size = yield call(fetchGetSize)
        yield put(requestSizeSuccess(size))
    }catch(err) {
        yield put(requestSizeFailed(err.message))
    }
}

function* watcherSizeSaga() {
    yield takeEvery(requestSize, handleGetSize)
}

export default watcherSizeSaga