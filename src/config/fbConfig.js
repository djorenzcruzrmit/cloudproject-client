import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cloudmoviefinder.firebaseapp.com",
  databaseURL: "https://cloudmoviefinder.firebaseio.com",
  projectId: "cloudmoviefinder",
  storageBucket: "cloudmoviefinder.appspot.com",
  messagingSenderId: "198662252374",
  appId: "1:198662252374:web:e757df535640bd2a2a58f7",
  measurementId: "G-CMZBTGZZVD",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;
