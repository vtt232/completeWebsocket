
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'


import ratingReducer from './reducers/ratingReducer';
import studentReducer from './reducers/studentReducers';
import rootSaga from './rootSaga';
import createSagaMiddleware from '@redux-saga/core';
import sizeReducer from './reducers/sizeReducer';


const configStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];

    const middleware = (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(middlewares)


    const store = configureStore({
        reducer:{
            rating: ratingReducer,
            students: studentReducer,
            size: sizeReducer
        },
        middleware: middleware
    })

    sagaMiddleware.run(rootSaga);

    return store

}


export default configStore