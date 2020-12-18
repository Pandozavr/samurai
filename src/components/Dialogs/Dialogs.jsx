import React from "react";
import style from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validation_form/validators";
import {ElementCreator} from "../common/FormControl/FormControls";

let maxLengthPost = maxLengthCreator(10);
const Textarea = ElementCreator("textarea");

const Dialogs = (props) => {


    let DialogsElements = props.DialogData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let MessageElements = props.MessageData.map(m => <MessageItem message={m.message}/> );

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return(
        <div className={style.dialogs}>
            <div className={style.dialogPart}>
                {DialogsElements}
            </div>
            <div>
                {MessageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessageBody"} validate={[required, maxLengthPost]}/>
            <button>add</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;