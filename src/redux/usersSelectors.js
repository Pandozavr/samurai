export const getUsers = (state) => {
    return state.FindFriendPage.users
};

export const getPageSize = (state) => {
    return state.FindFriendPage.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.FindFriendPage.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.FindFriendPage.currentPage
};

export const getIsFetching = (state) => {
    return state.FindFriendPage.isFetching
};

export const getValueFollowingInProgress = (state) => {
    return state.FindFriendPage.followingInProgress
};