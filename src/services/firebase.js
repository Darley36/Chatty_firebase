import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"

const config = {
    
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();