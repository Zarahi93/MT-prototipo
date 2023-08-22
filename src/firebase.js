// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHqF4f6Mb0E5hZI-_UQBCCIrOct-j_mFU",
  authDomain: "mood-tracker-6dd81.firebaseapp.com",
  projectId: "mood-tracker-6dd81",
  storageBucket: "mood-tracker-6dd81.appspot.com",
  messagingSenderId: "1085691409126",
  appId: "1:1085691409126:web:b9cd901bbc92c33d44c127",
  measurementId: "G-BTCGEC8PT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;