import { legacy_createStore, applyMiddleware } from 'redux'
import Reducer from './Reducer'
import { thunk } from 'redux-thunk'

const initialState = {
    todo: [],
    count: 0
}

export const store = legacy_createStore(Reducer, initialState, applyMiddleware(thunk))
// console.log(store)  // Check the initial state
