import React from "react";
import {addMessageDialog, onChangeMessageDialog} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        DialogData: state.DialogsPage.DialogData,
        MessageData: state.DialogsPage.MessageData,
        newText: state.DialogsPage.newMessageText
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageDialogActionCreator())
        },
        onChangeText: (text) => {
            dispatch(onChangeMessageDialogActionCreator(text))
        }
    }
};*/

const DialogsContainer = connect(mapStateToProps, {addMessageDialog, onChangeMessageDialog} )(Dialogs);

export default DialogsContainer;