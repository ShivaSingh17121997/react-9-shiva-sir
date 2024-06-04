
import { legacy_createStore } from 'redux';
import Reducer from '../Redux/Reducer'

const initialValue = {
    count: 0
}

// step 1 setup the store

export const store = legacy_createStore(Reducer, initialValue);
 console.log(store.getState())