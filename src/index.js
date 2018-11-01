import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'

// Css
import './index.css';

// Component
import App from './App';

const config = {
    apiKey: "AIzaSyAde52LxbMaQhzY-Y7bIXP9CoUOrXkOUVU",
    authDomain: "fir-react-e1fa4.firebaseapp.com",
    databaseURL: "https://fir-react-e1fa4.firebaseio.com",
    storageBucket: "fir-react-e1fa4.appspot.com",
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
