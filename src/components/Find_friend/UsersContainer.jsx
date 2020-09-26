import React from "react";
import {connect} from "react-redux";
import Find_friend from "./find_friend";
import {followAC, setUsersAC, unfollowAC} from "../../redux/find_friend-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.FindFriendPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Find_friend)