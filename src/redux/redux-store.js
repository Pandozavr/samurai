import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import FindFriendReducer from "./find_friend-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogReducer,
    Aside: asideReducer,
    FindFriendPage: FindFriendReducer
})

let store = createStore(reducers);

export default store;