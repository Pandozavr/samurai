import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfileThunk, setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userID = this.props.match.params.userID;

        if(!userID){
            userID = 2;
        }

        this.props.getUsersProfileThunk(userID);
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
        profile: state.ProfilePage.profile
    }
};

/*let authRedirectComponent = withAuthRedirect(ProfileContainer);

let WithRouterContainer = withRouter(authRedirectComponent);

export default connect(mapStateToProps, {getUsersProfileThunk})(WithRouterContainer);*/

export default compose(
    connect(mapStateToProps, {getUsersProfileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)