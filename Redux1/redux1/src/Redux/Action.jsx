import { ADD, REDUCE } from "./ActionType"

export const dispatchAdd = (payload) => {
    return { type: ADD, payload }

}

export const dispatchReduce = (payload) => {
    return { type: REDUCE, payload }
}