import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost} from "./redux/state";

export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState = {state} addPost = {addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}