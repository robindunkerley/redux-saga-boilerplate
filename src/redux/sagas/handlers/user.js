//call and put are used to call the request function, and put that data into the redux store
import { call, put } from 'redux-saga/effects'
//imported request function
import { requestGetUser } from '../requests/user';
import { setUser } from '../../ducks/user';

// * the handler function is what connects the root saga to the actual request
// * its actions are two-fold
    //Firstly it calls the request function in requests/user.js
    //Then it stores that data in our redux store

// we pass in the request made in requests/user.js


export function* handleGetUser(action) {

    try {
        // this part calls our request function
        // yield makes it so that we wait for the call to finish before we move on
        const response = yield call(requestGetUser);
        // we pull the data out of the response using destructuring
        const { data } = response;
        // this step puts the data into our redux store, by calling the setUser function we defined in ducks/user.js with the data as a parameter
        // and passing that into the put function
        // ? yield put is redux-saga's way of dispatching a redux action
        // it will dispatch the setUser() redux action, setting the user to the data that we got back from the endpoint
        yield put(setUser(data))
    } catch (error) {
        console.log(error)
    }
}