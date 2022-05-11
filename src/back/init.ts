// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBse6SxwG6Z5EQcfwL0-7BgJwZd-whO09w",
  authDomain: "task-tracker-3cc14.firebaseapp.com",
  projectId: "task-tracker-3cc14",
  storageBucket: "task-tracker-3cc14.appspot.com",
  messagingSenderId: "297811091023",
  appId: "1:297811091023:web:e813e49575bd3e54c1943a",
  measurementId: "G-JGQGC19MBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
