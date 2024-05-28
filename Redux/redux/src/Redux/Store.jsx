import Reduccer from "./Reduccer"
import { legacy_createStore } from 'redux'

const initialStatete = {
    count: 0,
    todo: []
}



export const store = legacy_createStore(Reduccer, initialStatete)