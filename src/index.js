import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
//import Pools from "./front_end/Pools/Pools";
import App from "./App";
//import BookingForm from "./front_end/Camps/BookingForm";
//import CampAvail from "./front_end/Camps/CampAvail";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
