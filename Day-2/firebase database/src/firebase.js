// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPWd7Rdv4TDfsLeIK16caxsXKVcZFuQvU",
    authDomain: "bablu-sfirstprojecttodo.firebaseapp.com",
    projectId: "bablu-sfirstprojecttodo",
    storageBucket: "bablu-sfirstprojecttodo.appspot.com",
    messagingSenderId: "87320592776",
    appId: "1:87320592776:web:0b89cec3c10053b4c2ba3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  =getFirestore(app);   // step 1 
