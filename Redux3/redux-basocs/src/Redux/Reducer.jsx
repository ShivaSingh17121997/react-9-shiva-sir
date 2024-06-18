import { act } from "react";
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./ActionTypes";

const Reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }

        //todo
        case ADD_TODO:
            return { ...state, todo: [...state.todo, action.payload] }

        case GET_TODO:
            return { ...state, todo: action.payload }

        case DELETE_TODO:
            return { ...state, todo: state.todo.filter(item => item.id !== action.payload) };


        case UPDATE_TODO:
            return { ...state, todo: state.todo.map((item) => item.id === action.payload.id ? { ...item, ...action.payload } : item) }


            


        default:
            return state
    }
}

export default Reducer;









// ...state, todo: state.todo.map((item) => {
//     item.id === action.payload.id ? { ...item, ...action.payload.todo } : item
