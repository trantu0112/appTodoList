import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCHCm3Gb9pOtAh83BcKcwetRV0NOoxhNxM",
    authDomain: "notemanagerreact-330e6.firebaseapp.com",
    databaseURL: "https://notemanagerreact-330e6-default-rtdb.firebaseio.com",
    projectId: "notemanagerreact-330e6",
    storageBucket: "notemanagerreact-330e6.appspot.com",
    messagingSenderId: "791578793518",
    appId: "1:791578793518:web:c0e4df9fb70031a140f1bf",
    measurementId: "G-G093C6YH6B"
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote');
