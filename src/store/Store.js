
import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../reducers/LoginReducer';
import AppReducer from '../reducers/AppReducer';


export default createStore(
    combineReducers({
         app:AppReducer,
         login:LoginReducer}),
         applyMiddleware(thunk)
);


