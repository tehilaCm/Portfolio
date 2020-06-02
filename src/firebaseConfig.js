import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCnurJFBvZZsVCP8Ouyhf8wM9tRIrvQfT4",
    authDomain: "portfolio-ff822.firebaseapp.com",
    databaseURL: "https://portfolio-ff822.firebaseio.com",
    projectId: "portfolio-ff822",
    storageBucket: "portfolio-ff822.appspot.com",
    messagingSenderId: "892471697300",
    appId: "1:892471697300:web:900c4408e23252d78df981",
    measurementId: "G-RN46X5L7F4"
  };
  firebase.initializeApp(firebaseConfig);