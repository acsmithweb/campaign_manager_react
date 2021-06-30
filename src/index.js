import React from 'react';
import ReactDOM from 'react-dom';
import App from './components_library/components/App';
import './components_library/styling/App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/messaging';

var firebaseConfig = {
    apiKey: "AIzaSyBoL4gdunTkBpEabG2DgDV_f6thKHmPVaQ",
    authDomain: "campaignmanager-2021.firebaseapp.com",
    projectId: "campaignmanager-2021",
    storageBucket: "campaignmanager-2021.appspot.com",
    messagingSenderId: "541355359943",
    appId: "1:541355359943:web:129eb41ef97a3e300ac8e2",
    measurementId: "G-1N6R0WXMR7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const messaging = firebase.messaging();

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
