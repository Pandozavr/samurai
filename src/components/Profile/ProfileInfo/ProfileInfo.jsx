import React from "react";
import Preloader from "../../common/preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.aboutMe}</div>
        </div>
    )
};

export default ProfileInfo;