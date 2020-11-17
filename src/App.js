import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import AsideContainer from "./components/Aside/AsideContainer";
import UsersContainer from "./components/Find_friend/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <AsideContainer />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/find_friend' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    )

}


export default App;