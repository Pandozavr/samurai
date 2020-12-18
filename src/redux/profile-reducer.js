import {profileAPI, usersAPI} from "../API(DAL)/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";


let intialState = {
    PostData: [
        {id: "1", post: "First post"},
        {id: "2", post: "Second post"},
        {id: "3", post: "Third post"}
    ],
    profile: null,
    status: ""
};

const ProfileReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: action.newPostText
            };
            let stateCopy = {
                ...state,
                PostData: [...state.PostData, newPost],
            };
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            let stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        case SET_STATUS: {
            let stateCopy = {...state, status: action.status};
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => {

    return {
        type: ADD_POST,
        newPostText
    }
};

export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export const getUsersProfileThunk = (userID) => async (dispatch) => {
    let response = await usersAPI.getProfileData(userID);
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userID) => async (dispatch) => {
    let response = await profileAPI.getStatus(userID);
        dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
};


export default ProfileReducer;