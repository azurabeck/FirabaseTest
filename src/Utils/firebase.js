import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAde52LxbMaQhzY-Y7bIXP9CoUOrXkOUVU",
    authDomain: "fir-react-e1fa4.firebaseapp.com",
    databaseURL: "https://fir-react-e1fa4.firebaseio.com",
    storageBucket: "fir-react-e1fa4.appspot.com",
  };

const fireInit = firebase.initializeApp(config);
export default fireInit