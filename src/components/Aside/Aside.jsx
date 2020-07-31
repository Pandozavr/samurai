import React from 'react';
import Style from './Aside.module.css';
import {NavLink} from "react-router-dom";
import FriendsItem from "./Friends/Friends";

const Aside = (props) => {

    let Friends = props.src.map(f => <FriendsItem src={f.src}/>)

    return (
        <aside>
            <div className={Style.navbar}>
                <div className={Style.item}>
                    <NavLink activeClassName={Style.active} to='/profile'>My profile</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink activeClassName={Style.active} to='/dialogs'>Dialogs</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink activeClassName={Style.active} to='/news'>News</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink activeClassName={Style.active} to='/music'>Music</NavLink>
                </div>
                <div className={Style.item}>
                    <NavLink activeClassName={Style.active} to='/settings'>Settings</NavLink>
                </div>
            </div>

            <div>
                <div>
                    My Friend:
                </div>
                <div  className={Style.friend}>
                    {Friends}
                </div>
            </div>
        </aside>
    )
}

export default Aside;