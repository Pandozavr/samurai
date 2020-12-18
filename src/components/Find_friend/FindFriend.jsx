import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem";

let FindFriend = (props) => {

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            {
                props.users.map(u => <UserItem
                        users={u}
                        key={u.id}
                        unFollowThunkCreator={props.unFollowThunkCreator}
                        followThunkCreator={props.followThunkCreator}
                        valueFollowingInProgress={props.valueFollowingInProgress}
                    />
                )
            }
        </div>
    )

};


export default FindFriend;