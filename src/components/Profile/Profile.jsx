import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

class Profile extends React.Component {
    render() {
        return (
            <main>
                <div className={Style.img}>
                    <img src='https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg'/>
                </div>
                <ProfileInfo/>
                <PostsContainer />
            </main>
        )
    }
}

export default Profile;