import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Aside src={props.appState.Aside.Friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile
                        ProfilePage = {props.appState.ProfilePage}
                        dispatch = {props.dispatch}
                    /> }/>
                    <Route path='/dialogs' render={ () => <Dialogs
                        DialogData = {props.appState.DialogsPage.DialogData}
                        MessageData = {props.appState.DialogsPage.MessageData}
                        newText = {props.appState.DialogsPage.newMessageText}
                        dispatch = {props.dispatch}
                    /> } />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
