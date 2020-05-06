import React from 'react';
import Style from './Main.module.css';

const Main = () => {
  return (
    <main>
      <div>
        <img src='https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg' />
      </div>
      <div className = {Style.item} >ava + desc</div>
      <div> 
        posts
      <div className = {Style.item} >new post</div>
        <div className = {Style.item} >post 1</div>
        <div className = {Style.item} >post 2</div>
      </div>
    </main>
  )
}

export default Main;