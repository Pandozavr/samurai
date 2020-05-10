import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div>{props.message}</div>
    )
}

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
    return(
        <div className={style.dialogs}>
            <div>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogItem name={DialogData[2].name} id={DialogData[2].id}/>
            </div>
            <div>
                <MessageItem message={MessageData[0].message}/>
                <MessageItem message={MessageData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;