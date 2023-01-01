// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgINYBlcF7bh886MH34yINp_i-vl2AHq4",
  authDomain: "movieapp-dc427.firebaseapp.com",
  projectId: "movieapp-dc427",
  storageBucket: "movieapp-dc427.appspot.com",
  messagingSenderId: "344108083764",
  appId: "1:344108083764:web:eb4221e32b633fef3d3861"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();