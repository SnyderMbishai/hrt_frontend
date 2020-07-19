import * as types from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TODO_ITEM:
        return {...state};
    case types.CREATE_TODO_ITEM_SUCCESS:
        return {...state, items: action.payload};
    case types.CREATE_TODO_ITEM_FAILS:
        return {...state, error: action.error}

    case types.FETCH_TODO_ITEM:
        return {...state};
    case types.FETCH_TODO_ITEM_SUCCESS:
        return {...state, items: action.payload};
    case types.FETCH_TODO_ITEM_FAILS:
        return {...state, error: action.error}

    case types.UPDATE_TODO_ITEM:
        return {...state};
    case types.UPDATE_TODO_ITEM_SUCCESS:
        return {...state, items: action.payload};
    case types.UPDATE_TODO_ITEM_FAILS:
        return {...state, error: action.error}

    case types.DELETE_TODO_ITEM:
        return {...state};
    case types.DELETE_TODO_ITEM_SUCCESS:
        return {...state, items: action.payload};
    case types.DELETE_TODO_ITEM_FAILS:
        return {...state, error: action.error}
    default:
      return state;
  }
}