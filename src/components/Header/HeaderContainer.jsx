import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUeserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
});

export default connect(mapStateToProps, {getAuthUeserData, logout})(HeaderContainer);