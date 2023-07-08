// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKTfYUJPzbSJsCx7Psrq8ttuLe4apNT7U",
  authDomain: "e-commerce-12f8b.firebaseapp.com",
  projectId: "e-commerce-12f8b",
  storageBucket: "e-commerce-12f8b.appspot.com",
  messagingSenderId: "1003687902948",
  appId: "1:1003687902948:web:b37acbbe51a5fc374bf6f1",
  measurementId: "G-GXXKN5KP67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
