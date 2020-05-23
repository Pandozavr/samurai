import React from "react";
import Style from "./Friends.module.css"

let FriendsItem = (props) => {
    return (
        <div className={Style.friendIcon}>
            <img src={props.src}/>
        </div>
    )
}

export default FriendsItem;