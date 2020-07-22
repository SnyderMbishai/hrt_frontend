import axios from 'axios';
import { REVERSE, REVERSE_SUCCESS, REVERSE_FAILS } from './actionTypes';

const reverse = data => ({
    type : REVERSE,
    data
});

const reverseSuccess = payload => ({
    type : REVERSE_SUCCESS,
    payload,
}); 

const reverseFails = errorMessage => ({
    type : REVERSE_FAILS,
    errorMessage,
});

const baseurl = "http://127.0.0.1:8000";

export const reverseVowels = data => (dispatch) =>{
    dispatch(reverse(data));
    return axios.post(`${baseurl}/vowel/vowel-service`, data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(reverseSuccess(payload.data.message)))
        .catch(errorMessage => dispatch(reverseFails(errorMessage)));
};
