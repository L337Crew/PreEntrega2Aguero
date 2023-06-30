// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkS_-MoX1BBIR7oaXDx_E2vq2lNc90sNw",
  authDomain: "proyectofinalaguero.firebaseapp.com",
  projectId: "proyectofinalaguero",
  storageBucket: "proyectofinalaguero.appspot.com",
  messagingSenderId: "1092473175827",
  appId: "1:1092473175827:web:9a662ee1753e8511f3e4e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)