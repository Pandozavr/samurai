import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let DialogsElements = props.DialogData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = props.MessageData.map(m => <MessageItem message={m.message}/> );

    let message = React.createRef();

    let newMessage = () => {
        let text = message.current.value;
        alert(text);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogPart}>
                {DialogsElements}
            </div>
            <div>
                {MessageElements}
                <textarea ref={message}></textarea>
                <button onClick={newMessage}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;