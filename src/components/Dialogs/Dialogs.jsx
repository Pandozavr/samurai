import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div>
                <div className={style.active}>
                    <NavLink to='/dialogs/1'>Valera</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/2'>Vasya</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/3'>Ivan</NavLink>
                </div>
            </div>
            <div>
                <div>Hi!</div>
                <div>How are you?</div>
                <div>Are you here?</div>
            </div>
        </div>
    )
}

export default Dialogs;