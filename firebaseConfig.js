import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJIhQ1b_3WxoGJY4vnpIIKfAG9AwNHP4o",
    authDomain: "questions-unanswered.firebaseapp.com",
    projectId: "questions-unanswered",
    storageBucket: "questions-unanswered.appspot.com",
    messagingSenderId: "816534382134",
    appId: "1:816534382134:web:962bb47c27e5c668bfda97",
    measurementId: "G-J9FEDNQRST"
    };

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export { db, firebaseapp };