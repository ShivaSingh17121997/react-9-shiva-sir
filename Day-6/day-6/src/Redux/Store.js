import { legacy_createStore } from 'redux';
import { reducer } from './Reducer';


const initialState = {
    counter: 0,
    todos: [],
    production: [],
    auth: false
}

export const Store = legacy_createStore(reducer, initialState)