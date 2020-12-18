import React, {Component} from 'react';
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
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader";



class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {

        if(!this.props.initialized) {
            return <Preloader />
        }

        return (

            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <AsideContainer/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={News}/>
                        <Route path='/music' render={Music}/>
                        <Route path='/settings' render={Settings}/>
                        <Route path='/find_friend' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>

        )

    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);