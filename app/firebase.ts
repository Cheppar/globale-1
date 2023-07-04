// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjowPw86BEMtYpoZhFGmcnxy2_FT1dd88",
  authDomain: "chepparing.firebaseapp.com",
  databaseURL: "https://chepparing-default-rtdb.firebaseio.com",
  projectId: "chepparing",
  storageBucket: "chepparing.appspot.com",
  messagingSenderId: "28110524265",
  appId: "1:28110524265:web:f893e4875e901d8167f7f8",
  measurementId: "G-ZBK4ZQNBC0"
};

// Initialize Firebase
export const firApp = initializeApp(firebaseConfig);
export const firAuth = getAuth(firApp);
export const firRealtimeDB = getDatabase(firApp);
