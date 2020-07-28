import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";


const App = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return (
                        <BrowserRouter>
                            <div className='app-wrapper'>
                                <Header/>
                                <Aside src={state.Aside.Friends}/>
                                <div className='app-wrapper-content'>
                                    <Route path='/profile' render={() => <Profile/>}/>
                                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                    <Route path='/news' render={News}/>
                                    <Route path='/music' render={Music}/>
                                    <Route path='/settings' render={Settings}/>
                                </div>
                            </div>
                        </BrowserRouter>
                    );
                }
            }
        </StoreContext.Consumer>
    )

}


export default App;
