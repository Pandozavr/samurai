const ADD_POST = "ADD-POST";
const WRITTING_TEXT_POST = "WRITING-TEXT-POST";

let intialState = {
    PostData: [
        {id:"1", post:"First post"},
        {id:"2", post:"Second post"},
        {id:"3", post:"Third post"}
    ],
    writingText: "enter your text"
};

const ProfileReducer = (state = intialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: state.writingText
            }
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
        default:
            return state;
    }

}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const writtingTextActionCreator = (text) => {
    return {
        type: WRITTING_TEXT_POST,
        text: text
    }
}

export default ProfileReducer;