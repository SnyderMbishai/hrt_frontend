import * as types from '../actions/actionTypes';

const initialState = {
    response : "",
};

export default function (state = initialState, action){
    switch (action.type){
        case types.REVERSE:
            return { ...state, };
        case types.REVERSE_SUCCESS:
            return { ...state, response: action.payload, };
        case types.REVERSE_FAILS:
            return { ...state, error: action.error,}
        default:
            return state;
    };
}
