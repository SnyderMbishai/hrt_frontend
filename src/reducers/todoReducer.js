import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
  todoItem: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TODO:
        return {...state};
    case types.CREATE_TODO_SUCCESS:
        return {...state, todos: action.payload};
    case types.CREATE_TODO_FAILS:
        return {...state, error: action.error}

    case types.FETCH_TODO:
        return {...state};
    case types.FETCH_TODO_SUCCESS:
        return {...state, todos: action.payload};
    case types.FETCH_TODO_FAILS:
        return {...state, error: action.error}

    case types.UPDATE_TODO:
        return {...state};
    case types.UPDATE_TODO_SUCCESS:
        return {...state, todos: action.payload};
    case types.UPDATE_TODO_FAILS:
        return {...state, error: action.error}

    case types.DELETE_TODO:
        return {...state};
    case types.DELETE_TODO_SUCCESS:
        return {...state, todos: action.payload};
    case types.DELETE_TODO_FAILS:
        return {...state, error: action.error}
    default:
      return state;
  }
}