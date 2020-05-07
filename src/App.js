import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}



export default App;
