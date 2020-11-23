import React from "react";
import {addMessageDialog, onChangeMessageDialog} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, {addMessageDialog, onChangeMessageDialog}),
    withAuthRedirect
)(Dialogs)