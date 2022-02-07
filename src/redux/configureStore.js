import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import { watcherSaga } from "./sagas/rootSaga";

// * combines all your reducers to be in this one file

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

// * A middleware takes your action and does something with it before it reaches the reducers/store and view layer stages
 
const sagaMiddleWare = createSagaMiddleware()

const middleware = [sagaMiddleWare]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

// * This makes sure that our watcherSaga generator function is being run continuously in the background, listening for any redux actions that are being dispatched
sagaMiddleWare.run(watcherSaga)

export default store;