import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogReducer,
    Aside: asideReducer
})

let store = createStore(reducers);

export default store;