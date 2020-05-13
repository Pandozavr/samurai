import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let DialogsElements = props.DialogData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = props.MessageData.map(m => <MessageItem message={m.message}/> );

    return(
        <div className={style.dialogs}>
            <div>
                {DialogsElements}
            </div>
            <div>
                {MessageElements}
            </div>
        </div>
    )
}

export default Dialogs;