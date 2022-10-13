import { all } from "redux-saga/effects";
import watcherSizeSaga from "./handlers/fetchNumberOfStudent";
import watcherUsersSaga from "./handlers/fetchStudent";

function* rootSaga() {
    yield all([watcherUsersSaga(), watcherSizeSaga()])
}

export default rootSaga