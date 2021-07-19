import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAb0-sELAke6uRIZac7m6REEEgtoePpoHw",
    authDomain: "todolist-ddb4f.firebaseapp.com",
    databaseURL: "https://todolist-ddb4f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-ddb4f",
    storageBucket: "todolist-ddb4f.appspot.com",
    messagingSenderId: "1046346300409",
    appId: "1:1046346300409:web:2989885242224124aedb28",
    measurementId: "G-8537Z7R14M"
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref();
