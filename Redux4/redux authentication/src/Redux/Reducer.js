const initialState = {
    counter: 0,
    todo: [],
    isAuth: false,
    token: null,
}

export default function Reducer(state = initialState, action) {
    console.log(state, action);

    switch (action.type) {
        case "AUTH_TOKEN":
            return { ...state, isAuth: true, token: action.payload };
        case "LOGOUT":
            return { ...state, isAuth: false, token: null }

        default:
            return state;
    }
}
