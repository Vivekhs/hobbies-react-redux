
const AppReducer = (state = {
    messageText:""
}, action) => {
    switch (action.type) {
        case "DISPLAY_MESSAGE":
            state = {
                ...state,
                messageText: action.payload
            }
            break;
        default : return state;
    }
    return state;
};

export default AppReducer;

