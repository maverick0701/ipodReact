import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
let firebaseKeys=require('./one')
import reportWebVitals from './reportWebVitals';
var firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: firebaseKeys.default.apiKey,
    authDomain:firebaseKeys.default.authDomain,
    projectId: firebaseKeys.default.projectId,
    storageBucket: firebaseKeys.default.storageBucket,
    messagingSenderId: firebaseKeys.default.messagingSenderId,
    appId: firebaseKeys.default.appId
});
ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
