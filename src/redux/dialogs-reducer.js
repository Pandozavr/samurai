const ADD_MESSAGE = "ADD-MESSAGE";
const WRITTING_TEXT_MESSAGE = "WRITING-TEXT-MESSAGE";

let initialState = {
    DialogData: [
        {id:"1", name: "Grizz"},
        {id:"2", name: "Panda"},
        {id:"3", name: "Chloe"},
    ],
    MessageData: [
        {id:"1", message: "Hi!"},
        {id:"2", message: "How are you?"},
    ],
    newMessageText: "enter your text"
};

const DialogReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "3",
                message: state.newMessageText
            }
            let stateCopy = {
                ...state,
                MessageData: [...state.MessageData, newMessage],
                newMessageText: ""
            };
            return stateCopy;
        }
        case WRITTING_TEXT_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;

    }

}

export const addMessageDialog = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const onChangeMessageDialog = (text) => {

    return {
        type: WRITTING_TEXT_MESSAGE,
        text: text
    }
}

export default DialogReducer;