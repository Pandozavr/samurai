import React from 'react';
import Style from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <main>
      <div  className={Style.img} >
        <img src='https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg' />
      </div>
      <div>
          <div>
              <img src = 'https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg'/>
          </div>
      </div>
      <Posts />
    </main>
  )
}

export default Profile;