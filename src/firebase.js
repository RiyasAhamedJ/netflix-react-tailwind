// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzuRJgbkwm3CyiO1CwIrdG0I8mYA1-4I",
  authDomain: "netflix-clone-2f499.firebaseapp.com",
  projectId: "netflix-clone-2f499",
  storageBucket: "netflix-clone-2f499.appspot.com",
  messagingSenderId: "1011561024704",
  appId: "1:1011561024704:web:31c2daca764d78b010b125"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
