import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW_EVJmR0Agfo9PkH6Sz7TkAkuKL-O1Ps",
  authDomain: "music-vue-93015.firebaseapp.com",
  projectId: "music-vue-93015",
  storageBucket: "music-vue-93015.appspot.com",
  appId: "1:104436155181:web:4548a1fc9aa231d6e3c9a4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
