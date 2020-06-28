const ADD_MESSAGE = "ADD-MESSAGE";
const WRITTING_TEXT_MESSAGE = "WRITING-TEXT-MESSAGE";

const DialogReducer = (state,action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: "3",
                message: state.newMessageText
            }
            state.MessageData.push(newMessage);
            state.newMessageText = "";
            return state;
        case WRITTING_TEXT_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;

    }

}

export const addMessageDialogActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const onChangeMessageDialogActionCreator = (text) => {

    return {
        type: WRITTING_TEXT_MESSAGE,
        text: text
    }
}

export default DialogReducer;