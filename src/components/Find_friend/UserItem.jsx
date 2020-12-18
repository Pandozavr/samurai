import React from "react";
import styles from "./find_friend.module.css";
import noAvatar from "../../assets/images/noAvatar.png";
import {NavLink} from "react-router-dom";

let UserItem = (props) => {

        return (
                <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + props.users.id}>
                            <img src={props.users.photos.small != null ? props.users.photos.small : noAvatar} className={styles.ffAvatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.users.followed
                            ? <button disabled={props.valueFollowingInProgress.some(id => id === props.users.id)} onClick={() => {
                                props.unFollowThunkCreator(props.users.id);
                            }}>Unfollow</button>

                            : <button disabled={props.valueFollowingInProgress.some(id => id === props.users.id)} onClick={() => {
                                props.followThunkCreator(props.users.id);
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{props.users.name}</div>
                        <div>{props.users.status}</div>
                    </span>
                    <span>
                        <div>{"props.users.location.country"}</div>
                        <div>{"props.users.location.city"}</div>
                    </span>
                </span>
                </div>
        )
    };


export default UserItem;