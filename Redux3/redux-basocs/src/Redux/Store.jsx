import { legacy_createStore } from 'redux'
import Reducer from './Reducer'

const initialState = {
    todo: [],
    count: 0
}

export const store = legacy_createStore(Reducer, initialState)
// console.log(store)  // Check the initial state
