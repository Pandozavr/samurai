import React from "react";
import {connect} from "react-redux";
import {
    follow, followProgress, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow, unFollowThunkCreator
} from "../../redux/find_friend-reducer";
import FindFriend from "./FindFriend";
import Preloader from "../common/preloader";



class FF_Container extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNamber) => {
        this.props.getUsersThunkCreator(pageNamber, this.props.pageSize);

        this.props.setCurrentPage(pageNamber);

    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <FindFriend totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followProgress={this.props.followProgress}
                        valueFollowingInProgress={this.props.valueFollowingInProgress}
                        unFollowThunkCreator={this.props.unFollowThunkCreator}
                        followThunkCreator={this.props.followThunkCreator}

            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.FindFriendPage.users,
        pageSize: state.FindFriendPage.pageSize,
        totalUsersCount: state.FindFriendPage.totalUsersCount,
        currentPage: state.FindFriendPage.currentPage,
        isFetching: state.FindFriendPage.isFetching,
        valueFollowingInProgress: state.FindFriendPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setFetchingValue: (value) => {
//             dispatch(setFetchingValueAC(value))
//         }
//     }
// };




export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        followProgress,
        getUsersThunkCreator,
        unFollowThunkCreator,
        followThunkCreator

    }
    )(FF_Container);