
const LoginReducer = (state = {isLoggedIn:false}, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            state = {
                ...state,
                isLoggedIn: action.payload
            }
            break;
        case "USER_LOGOUT":
            state = {
                ...state,
                isLoggedIn: action.payload
            }
            break;
        default : return state;
    }
    return state;
};

export default LoginReducer;

