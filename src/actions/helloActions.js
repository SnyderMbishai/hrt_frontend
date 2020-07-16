import axios from 'axios';
import { HELLO, HELLO_SUCCESS, HELLO_FAILS } from './actionTypes';

const fetchHello = () => ({
    type : HELLO,
});

const fetchHelloSuccess = payload => {
    return (
        {
            type : HELLO_SUCCESS,
            payload,
        }
    )
};

const fetchHelloFails = errorMessage => {
    return({
        type : HELLO_FAILS,
        errorMessage,
    })
};

export function helloAction(){
    return(dispatch) =>{
        dispatch(fetchHello());
        return axios.get("http://127.0.0.1:8000/hello")
            .then(payload => dispatch(fetchHelloSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchHelloFails(errorMessage)));
    };
}
