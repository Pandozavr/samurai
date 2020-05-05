import React from 'react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';



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
