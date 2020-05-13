import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


let DialogData = [
    {id:"1", name: "Valera"},
    {id:"2", name: "Vasya"},
    {id:"3", name: "Volodya"},
];

let MessageData = [
    {id:"1", message: "Hi!"},
    {id:"2", message: "How are you?"},
];



const Dialogs = () => {

    let DialogsElements = DialogData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = MessageData.map(m => <MessageItem message={m.message}/> );

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