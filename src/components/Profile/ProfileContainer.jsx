import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
            // Мы пишем так - {...this.props}, а не так - props = {this.props}, чтобы передать не один отрибут пропс,
            // а чтобы своего рода раскукожить входящий объект пропс и передать каждый ключ объекта пропс, как отдельный атрибут.
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile:state.ProfilePage.profile
    }
};

let WithRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithRouterContainer);