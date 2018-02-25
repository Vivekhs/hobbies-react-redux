export function login(){
    return(dispatch)=> {
        dispatch({type: "USER_LOGIN",
        payload: true});
    }
}

export function logout(){
    return {
        type: "USER_LOGOUT",
        payload: false
    }
}
