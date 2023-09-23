// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getDatabase} from "firebase/database"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvb0Py6FF3Bgl556shTQZhTZa2Ottxydk",
  authDomain: "codefurymc6.firebaseapp.com",
  projectId: "codefurymc6",
  storageBucket: "codefurymc6.appspot.com",
  messagingSenderId: "93025499906",
  appId: "1:93025499906:web:d3d112933a12223666a01b",
  measurementId: "G-5Q7BC5LS7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
