import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
import reverserReducer from './reverserReducer';
import todoReducer from './todoReducer';
import todoItemReducer from './todoItemReducer';

const rootReducer = combineReducers({
    hello : helloReducer,
    reverse : reverserReducer,
    todo : todoReducer,
    todoI : todoItemReducer
});

export default rootReducer;
