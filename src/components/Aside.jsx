import React from 'react';
import Style from'./Aside.module.css';

const Aside = () => {
  return (
    <aside>
      <div className = {Style.item}>
        <a>My profile</a>
      </div>
      <div className = {Style.item}>
        <a>Messeges</a>
      </div>
      <div className = {Style.item}>
        <a>News</a>
      </div>
      <div className = {Style.item}>
        <a>Music</a>
      </div>
      <div className = {Style.item}>
        <a>Settings</a>
      </div>
    </aside>
  )
}

export default Aside;