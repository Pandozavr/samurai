import {loginAPI, usersAPI} from "../API(DAL)/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

let intialState = {
    id: null,
    email: null,
    login: null,
    isFetching: null,
    isAuth: false
};

const  AuthReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
};

export const setAuthUeserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
};

export const getAuthUeserData = () => async (dispatch) => {
   let data = await usersAPI.auth();

        if(data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUeserData(id, email, login, true))
        }

};

export const login = (email, password, rememberMe) => async (dispatch)=> {
    let response = await loginAPI.login(email, password, rememberMe);

        if(response.data.resultCode === 0) {
            dispatch(getAuthUeserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit("login", {_error: message}));
        }
};

export const logout = () => async (dispatch)=> {
    let response = await loginAPI.logout();

        if(response.data.resultCode === 0) {
            dispatch(setAuthUeserData(null, null, null, false))
        }
};

export default AuthReducer;