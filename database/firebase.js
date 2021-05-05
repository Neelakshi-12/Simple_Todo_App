// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADq6DJUw09XNatGGaVFFhCktRHcBoidD8",
    authDomain: "reactnativefirebase-693b4.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-693b4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reactnativefirebase-693b4",
    storageBucket: "reactnativefirebase-693b4.appspot.com",
    messagingSenderId: "1084999190404",
    appId: "1:1084999190404:web:1cc8117ff2a577b67e7fd1"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;