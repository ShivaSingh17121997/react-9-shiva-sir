import React from 'react'

export default function Reduccer(state, { type, payload }) {
    switch (type) {
        case "ADD":
            return { ...state, count: state.count + payload }

        case "REDUCE":
            return { ...state, count: state.count - payload }

        default:
            return state;

    }
}































// Reducer.js
// const Reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//             return { ...state, count: state.count + action.payload };
//         case "REDUCE":
//             return { ...state, count: state.count - action.payload };
//         default:
//             return state;
//     }
// };

// export default Reducer;
