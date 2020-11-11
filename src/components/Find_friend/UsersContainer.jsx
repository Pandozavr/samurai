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


class FF_Container extends React.Component {

    componentDidMount() {
        this.props.setFetchingValue(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetchingValue(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNamber) => {
        this.props.setFetchingValue(true);
        this.props.setCurrentPage(pageNamber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
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