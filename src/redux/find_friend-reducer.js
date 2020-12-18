import {usersAPI} from "../API(DAL)/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const FETCHING = "FETCHING";
const FOLLOW_PROGRESS = "FOLLOW_PROGRESS";

let intialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const FindFriendReducer = (state = intialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id ===action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id ===action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case FETCHING: {
            return {...state, isFetching: action.value}
        }
        case FOLLOW_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }

        default:
            return state;
    }

};

export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
};

export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setCurrentPage = (currentPage) => {
    return {
        type: CURRENT_PAGE,
        currentPage
    }
};

export const setTotalUsersCount = (TotalUsersCount) => {
    return {
        type: TOTAL_USERS_COUNT,
        count: TotalUsersCount
    }
};

export const setFetchingValue = (value) => {
    return {
        type: FETCHING,
        value: value
    }
};

export const followProgress = (isFetching, userID) => {
    return {
        type: FOLLOW_PROGRESS,
        isFetching,
        userID
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setFetchingValue(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setFetchingValue(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    };
};

export const unFollowThunkCreator = (userID) => {
    return async (dispatch) => {
        dispatch(followProgress(true, userID));
        let data = await usersAPI.unfollow(userID)
            if(data.resultCode == 0){
                dispatch(unfollow(userID))
            }
            dispatch(followProgress(false, userID));
    };
};

export const followThunkCreator = (userID) => {
    return async (dispatch) => {
        dispatch(followProgress(true, userID));
        let data = await usersAPI.follow(userID)
            if(data.resultCode == 0){
                dispatch(follow(userID))
            }
            dispatch(followProgress(false, userID));
    };
};

export default FindFriendReducer;