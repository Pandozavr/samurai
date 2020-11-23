import {usersAPI} from "../API(DAL)/api";

const SET_USER_DATA = "SET_USER_DATA";

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }

};


export const setAuthUeserData = (id, email, login) => {

    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    }
};

export const getAuthUeserData = () => (dispatch)=> {
    usersAPI.auth().then(data => {
        if(data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUeserData(id, email, login))
        }
    });
};

export default AuthReducer;