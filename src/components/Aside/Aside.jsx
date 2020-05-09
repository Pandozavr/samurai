import React from 'react';
import Style from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <div className = {Style.item}>
        <NavLink activeClassName={Style.active} to='/profile'>My profile</NavLink>
      </div>
      <div className = {Style.item}>
        <NavLink activeClassName={Style.active} to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className = {Style.item}>
        <NavLink activeClassName={Style.active} to='/news'>News</NavLink>
      </div>
      <div className = {Style.item}>
        <NavLink activeClassName={Style.active} to='/music'>Music</NavLink>
      </div>
      <div className = {Style.item}>
        <NavLink activeClassName={Style.active} to='/settings'>Settings</NavLink>
      </div>
    </aside>
  )
}

export default Aside;