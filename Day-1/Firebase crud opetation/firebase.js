// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARdq_ji5nL7dH73tnz5y23JOXZy-mWzWk",
    authDomain: "react-todo-3e57b.firebaseapp.com",
    projectId: "react-todo-3e57b",
    storageBucket: "react-todo-3e57b.appspot.com",
    messagingSenderId: "116988458452",
    appId: "1:116988458452:web:acabfc3f5b55b03a705241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)

export default db;