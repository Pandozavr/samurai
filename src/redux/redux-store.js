import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import FindFriendReducer from "./find_friend-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogReducer,
    Aside: asideReducer,
    FindFriendPage: FindFriendReducer,
    Auth: AuthReducer,
    form: formReducer,
    App: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;