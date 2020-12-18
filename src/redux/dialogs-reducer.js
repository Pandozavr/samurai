const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    DialogData: [
        {id:"1", name: "Grizz"},
        {id:"2", name: "Panda"},
        {id:"3", name: "Chloe"},
    ],
    MessageData: [
        {id:"1", message: "Hi!"},
        {id:"2", message: "How are you?"},
    ]
};

const DialogReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "3",
                message: action.newMessageBody
            }
            let stateCopy = {
                ...state,
                MessageData: [...state.MessageData, newMessage]
            };
            return stateCopy;
        }
        default:
            return state;

    }
};

export const addMessageDialog = (newMessageBody) => {

    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};

export default DialogReducer;