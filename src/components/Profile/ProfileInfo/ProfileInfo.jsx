import React from "react";
import Preloader from "../../common/preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} />

            </div>
            <div>{props.profile.aboutMe}</div>
        </div>
    )
};

export default ProfileInfo;