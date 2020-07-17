import axios from 'axios';
import * as types from './actionTypes';

// C
const createTodo = data => ({
    type : types.CREATE_TODO,
    data
});

const createTodoSuccess = payload => ({
    type : types.CREATE_TODO_SUCCESS,
    payload,
}); 

const createTodoFails = errorMessage => ({
    type : types.CREATE_TODO_FAILS,
    errorMessage,
});

const createTodoAction = data => (dispatch) =>{
    dispatch(createTodo(data));
    return axios.post("", data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(createTodoSuccess(payload.data)))
        .catch(errorMessage => dispatch(createTodoFails(errorMessage)));
};

// R
const fetchTodo = data => ({
    type : types.FETCH_TODO,
    data
});

const fetchTodoSuccess = payload => ({
    type : types.FETCH_TODO_SUCCESS,
    payload,
}); 

const fetchTodoFails = errorMessage => ({
    type : types.FETCH_TODO_FAILS,
    errorMessage,
});

function fetchTodosAction(){
    return(dispatch) =>{
        dispatch(fetchTodo());
        return axios.get("http://127.0.0.1:8000/api/todos")
            .then(payload => dispatch(fetchTodoSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTodoFails(errorMessage)));
    };
}

function fetchSingleTodoAction(){
    return(dispatch) =>{
        dispatch(fetchTodo());
        return axios.get("")
            .then(payload => dispatch(fetchTodoSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTodoFails(errorMessage)));
    };
}

// U
const updateTodo = data => ({
    type : types.UPDATE_TODO,
    data
});

const updateTodoSuccess = payload => ({
    type : types.UPDATE_TODO_SUCCESS,
    payload,
}); 

const updateTodoFails = errorMessage => ({
    type : types.UPDATE_TODO_FAILS,
    errorMessage,
});

const UpdateTodoAction = data => (dispatch) =>{
    dispatch(updateTodo(data));
    return axios.put("", data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(updateTodoSuccess(payload.data)))
        .catch(errorMessage => dispatch(updateTodoFails(errorMessage)));
};

// D
const deleteTodo = data => ({
    type : types.DELETE_TODO,
    data
});

const deleteTodoSuccess = payload => ({
    type : types.DELETE_TODO_SUCCESS,
    payload,
}); 

const deleteTodoFails = errorMessage => ({
    type : types.DELETE_TODO_FAILS,
    errorMessage,
});

const DeleteTodoAction = data => (dispatch) =>{
    dispatch(deleteTodo(data));
    return axios.delete("", data, {
        headers : {
            'Content-Type': 'application/json',
        },
    })
        .then(payload => dispatch(deleteTodoSuccess(payload.data)))
        .catch(errorMessage => dispatch(deleteTodoFails(errorMessage)));
};

export {
    createTodoAction,
    fetchSingleTodoAction,
    fetchTodosAction,
    UpdateTodoAction,
    DeleteTodoAction
}
