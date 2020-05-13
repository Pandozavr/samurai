import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostData = [
    {id:"1", post:"First post"},
    {id:"2", post:"Second post"},
    {id:"3", post:"Third post"}
];

let DialogData = [
    {id:"1", name: "Valera"},
    {id:"2", name: "Vasya"},
    {id:"3", name: "Volodya"},
];

let MessageData = [
    {id:"1", message: "Hi!"},
    {id:"2", message: "How are you?"},
];

ReactDOM.render(
  <React.StrictMode>
    <App PostData = {PostData} DialogData = {DialogData} MessageData = {MessageData} />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
