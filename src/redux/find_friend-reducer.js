const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const FETCHING = "FETCHING";

let intialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

export default FindFriendReducer;