import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cmfinder-22505.firebaseapp.com",
  databaseURL: "https://cmfinder-22505.firebaseio.com",
  projectId: "cmfinder-22505",
  storageBucket: "cmfinder-22505.appspot.com",
  messagingSenderId: "372280008063",
  appId: "1:372280008063:web:2b640b31a9562554b24e4a",
  measurementId: "G-NMX9KLM84Z",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;
