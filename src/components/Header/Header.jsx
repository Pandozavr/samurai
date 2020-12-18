import React from 'react';
import Style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
  return(
    <header>
      <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png' />
        <div className={Style.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <button onClick={props.logout}>log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  )
}

export default Header;