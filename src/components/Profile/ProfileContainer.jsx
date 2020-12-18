import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfileThunk, setUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userID = this.props.match.params.userID;

        if(!userID){
            userID = this.props.authorisedUserId;
            if(!userID) {
                this.props.history.push("/login")
            }
        }

        this.props.getUsersProfileThunk(userID);
            this.props.getStatus(userID);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
            // Мы пишем так - {...this.props}, а не так - props = {this.props}, чтобы передать не один отрибут пропс,
            // а чтобы своего рода раскукожить входящий объект пропс и передать каждый ключ объекта пропс, как отдельный атрибут.
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorisedUserId: state.Auth.id,
        isAuth: state.Auth.isAuth
    }
};

/*let authRedirectComponent = withAuthRedirect(ProfileContainer);

let WithRouterContainer = withRouter(authRedirectComponent);

export default connect(mapStateToProps, {getUsersProfileThunk})(WithRouterContainer);*/

export default compose(
    connect(mapStateToProps, {getUsersProfileThunk, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)