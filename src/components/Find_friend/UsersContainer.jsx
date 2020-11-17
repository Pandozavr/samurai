import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFetchingValue,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/find_friend-reducer";
import * as axios from "axios";
import FindFriend from "./FindFriend";
import Preloader from "../common/preloader";
import {usersAPI} from "../../API(DAL)/api";



class FF_Container extends React.Component {

    componentDidMount() {
        this.props.setFetchingValue(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setFetchingValue(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNamber) => {
        this.props.setFetchingValue(true);
        this.props.setCurrentPage(pageNamber);
        usersAPI.getUsers(pageNamber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setFetchingValue(false);
        });
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
        isFetching: state.FindFriendPage.isFetching
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
        setFetchingValue
    }
    )(FF_Container);