import { legacy_createStore } from 'redux';
import Reducer from './Reducer';


const initialState = {
    counter: 0,
    todo: [],
    isAuth: false,
    token: null
}

export const store = legacy_createStore(Reducer, initialState)