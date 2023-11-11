// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2Camjb6EaYGZgj10LrJaW42jBH1kKag0",
  authDomain: "linkedin-v2-555ff.firebaseapp.com",
  projectId: "linkedin-v2-555ff",
  storageBucket: "linkedin-v2-555ff.appspot.com",
  messagingSenderId: "370979225937",
  appId: "1:370979225937:web:4c801a558c1ed5db269370"
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };