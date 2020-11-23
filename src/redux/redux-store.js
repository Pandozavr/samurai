import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import FindFriendReducer from "./find_friend-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogReducer,
    Aside: asideReducer,
    FindFriendPage: FindFriendReducer,
    Auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;