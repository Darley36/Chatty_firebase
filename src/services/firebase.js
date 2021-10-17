import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"

const config = {
    apiKey: "AIzaSyCvYcOM4xDH_M5ESYMKdX1PxFg31EweqDg",
  authDomain: "chattyf-a2f64.firebaseapp.com",
  databaseURL: "https://chattyf-a2f64-default-rtdb.firebaseio.com",
  projectId: "chattyf-a2f64",
  storageBucket: "chattyf-a2f64.appspot.com",
  messagingSenderId: "457839634477",
  appId: "1:457839634477:web:779e1675e222a8a1b9b0a4"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();