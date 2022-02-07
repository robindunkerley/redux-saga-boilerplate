import axios from 'axios'

//runs similar to a useEffect api request, but instead it runs based on redux actions rather than components mounting/unmounting


//this function makes the API call
//Rather than a .then(), this function returns the api promise, which we then pass to the handler function in handlers/user.js

export function requestGetUser() {
    return axios.request({
        method: 'get',
        //set to request data from this endpoint
        url: 'https://my-json-server.typicode.com/robindunkerley/demo/user'
    });
}