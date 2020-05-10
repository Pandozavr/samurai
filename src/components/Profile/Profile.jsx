import React from 'react';
import Style from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main>
            <div className={Style.img}>
                <img src='https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg'/>
            </div>
            <ProfileInfo/>
            <Posts/>
        </main>
    )
}

export default Profile;