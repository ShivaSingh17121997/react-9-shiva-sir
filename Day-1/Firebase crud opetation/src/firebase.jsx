// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEjTkDq5aYpEYY1m_Th6yywQADlCK23Y4",
    authDomain: "react-4firebasetodo.firebaseapp.com",
    projectId: "react-4firebasetodo",
    storageBucket: "react-4firebasetodo.appspot.com",
    messagingSenderId: "443488070924",
    appId: "1:443488070924:web:2c6b310a70f25d20b52d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
