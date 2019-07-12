import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";

const counter = (state = 0 , action) =>{
    switch(action.type){
        case 'Increment':
        return state = state + 1;

        case 'Decrement':
        return state=state - 1;

        default:
        return state;
    }
};
const store= createStore(counter);

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById("root"));
