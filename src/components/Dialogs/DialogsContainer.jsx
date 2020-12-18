import React from "react";
import {addMessageDialog} from "../../redux/dialogs-reducer";
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

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageDialog(newMessageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)