import {usersAPI} from "../API(DAL)/api";

const ADD_POST = "ADD-POST";
const WRITTING_TEXT_POST = "WRITING-TEXT-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const GET_USERS_PROFILE = "GET_USERS_PROFILE";

let intialState = {
    PostData: [
        {id:"1", post:"First post"},
        {id:"2", post:"Second post"},
        {id:"3", post:"Third post"}
    ],
    profile: null,
    writingText: "enter your text"
};

const ProfileReducer = (state = intialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: state.writingText
            };
            let stateCopy = {
                ...state,
                PostData: [...state.PostData, newPost],
                writingText: ""
            };
            return stateCopy;
        }
        case WRITTING_TEXT_POST: {
            let stateCopy = {...state};
            stateCopy.writingText = action.text;
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            let stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        default:
            return state;
    }

};

export const addPost = () => {

    return {
        type: ADD_POST
    }
};

export const writingText = (text) => {
    return {
        type: WRITTING_TEXT_POST,
        text: text
    }
};

export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    }
};

export const getUsersProfileThunk = (userID) => (dispatch) => {

    usersAPI.getProfileData(userID).then(response => {
        dispatch(setUsersProfile(response.data));
    });
};

export default ProfileReducer;