import {getAuthUeserData} from "./auth-reducer";

const INI_SUCCESS = "INI_SUCCESS";

let intialState = {
    initialized: false
};


const  appReducer = (state = intialState, action) => {

    switch (action.type) {
        case INI_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

export const iniSuccess = () => {

    return {
        type: INI_SUCCESS
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUeserData());
    promise.then(() => {
        dispatch(iniSuccess())
    })
};


export default appReducer;