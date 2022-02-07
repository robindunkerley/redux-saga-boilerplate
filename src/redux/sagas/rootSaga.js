import {takeLatest} from 'redux-saga/effects'
import { handleGetUser } from './handlers/user'
import {GET_USER} from '../ducks/user'

// A generator function allows you to do asynchronous things a bit easier
// It is called in configureStore.js - sagaMiddleWare.run(watcherSaga)
// This generator function looks for any actions that have been dispatched by our redux store, and we map those actions to the handler functions that will actually call our api requests
export function* watcherSaga() {
    // * here, the GET_USER action defined in our ducks/user.js file, is mapped to the handleGetUser function in our handlers/user.js
    // what takeLatest does is make sure that the latest instance of the call to the endpoint, for instance if multiple calls to that endpoint are made by your app
    // this differs to for example takeEvery(), which will set the data for every call that is made
    yield takeLatest(GET_USER, handleGetUser)
}