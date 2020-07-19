import * as types from '../actions/actionTypes';

const initialState = {
    response : [],
};

export default function (state = initialState, action){
    switch (action.type){
        case types.HELLO:
            return { ...state, };
        case types.HELLO_SUCCESS:
            return { ...state, response: action.payload, };
        case types.HELLO_FAILS:
            return { ...state, error: action.error,}
        default:
            return state;
    };
}