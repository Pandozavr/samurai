import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageDialogActionCreator, onChangeMessageDialogActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {


    let DialogsElements = props.DialogData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = props.MessageData.map(m => <MessageItem message={m.message}/> );

    let message = React.createRef();

    let onChangeText = () => {
        let text = message.current.value;
        props.dispatch(onChangeMessageDialogActionCreator(text))
        console.log(text);
    }

    let addMessage = () => {
        props.dispatch(addMessageDialogActionCreator())
        console.log(props.MessageData)
    }


    return(
        <div className={style.dialogs}>
            <div className={style.dialogPart}>
                {DialogsElements}
            </div>
            <div>
                {MessageElements}
                <textarea onChange={onChangeText} value={props.newText} ref={message}></textarea>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;