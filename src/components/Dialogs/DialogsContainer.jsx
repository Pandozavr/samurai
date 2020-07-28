import React from "react";
import {addMessageDialogActionCreator, onChangeMessageDialogActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onChangeText = (text) => {
                        store.dispatch(onChangeMessageDialogActionCreator(text))
                    }

                    let addMessage = () => {
                        store.dispatch(addMessageDialogActionCreator())
                    }

                    return <Dialogs
                        DialogData={state.DialogsPage.DialogData}
                        MessageData={state.DialogsPage.MessageData}
                        addMessage={addMessage}
                        onChangeText={onChangeText}
                        newText={state.DialogsPage.newMessageText}
                    />
                }
            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;