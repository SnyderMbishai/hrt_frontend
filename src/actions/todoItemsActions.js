import axios from 'axios';
import * as types from './actionTypes';

const baseurl = "http://127.0.0.1:8000";
// C
const createTodoItem = data => ({
    type : types.CREATE_TODO_ITEM,
    data
});

const createTodoItemSuccess = payload => ({
    type : types.CREATE_TODO_ITEM_SUCCESS,
    payload,
}); 

const createTodoItemFails = errorMessage => ({
    type : types.CREATE_TODO_ITEM_FAILS,
    errorMessage,
});

const createTodoItemAction = data => (dispatch) =>{
    dispatch(createTodoItem(data));
    return axios.post(`${baseurl}/api/todos/${data.id}/todo-items`, data.data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(createTodoItemSuccess(payload.data)))
        .catch(errorMessage => dispatch(createTodoItemFails(errorMessage)));
};

// R
const fetchTodoItem = data => ({
    type : types.FETCH_TODO_ITEM,
    data
});

const fetchTodoItemSuccess = payload => ({
    type : types.FETCH_TODO_ITEM_SUCCESS,
    payload,
}); 

const fetchTodoItemFails = errorMessage => ({
    type : types.FETCH_TODO_ITEM_FAILS,
    errorMessage,
});

function fetchTodoItemsAction(){
    return(dispatch) =>{
        dispatch(fetchTodoItem());
        return axios.get("")
            .then(payload => dispatch(fetchTodoItemSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTodoItemFails(errorMessage)));
    };
}

function fetchSingleTodoItemsAction(){
    return(dispatch) =>{
        dispatch(fetchTodoItem());
        return axios.get("")
            .then(payload => dispatch(fetchTodoItemSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTodoItemFails(errorMessage)));
    };
}

// U
const updateTodoItem = data => ({
    type : types.UPDATE_TODO_ITEM,
    data
});

const updateTodoItemSuccess = payload => ({
    type : types.UPDATE_TODO_ITEM_SUCCESS,
    payload,
}); 

const updateTodoItemFails = errorMessage => ({
    type : types.UPDATE_TODO_ITEM_FAILS,
    errorMessage,
});

const UpdateTodoItemAction = data => (dispatch) =>{
    dispatch(updateTodoItem(data));
    return axios.put(`${baseurl}/api/todos/${data.todo_id}/todo-items/${data.item_id}`, data.payload, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(updateTodoItemSuccess(payload.data)))
        .catch(errorMessage => dispatch(updateTodoItemFails(errorMessage)));
};

// D
const deleteTodoItem = data => ({
    type : types.DELETE_TODO_ITEM,
    data
});

const deleteTodoItemSuccess = payload => ({
    type : types.DELETE_TODO_ITEM_SUCCESS,
    payload,
}); 

const deleteTodoItemFails = errorMessage => ({
    type : types.DELETE_TODO_ITEM_FAILS,
    errorMessage,
});

const DeleteTodoItemAction = data => (dispatch) =>{
    dispatch(deleteTodoItem(data));
    return axios.delete(`${baseurl}/api/todos/${data.todo_id}/todo-items/${data.item_id}`, data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(deleteTodoItemSuccess(payload.data)))
        .catch(errorMessage => dispatch(deleteTodoItemFails(errorMessage)));
};

export {
    createTodoItemAction,
    fetchSingleTodoItemsAction,
    fetchTodoItemsAction,
    UpdateTodoItemAction,
    DeleteTodoItemAction
}
