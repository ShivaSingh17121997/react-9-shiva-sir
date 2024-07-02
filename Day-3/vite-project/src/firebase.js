// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCceXBYToUeMLQbVQSQTmRYEAgo764TYRI",
    authDomain: "gooleauthwithfirebase.firebaseapp.com",
    projectId: "gooleauthwithfirebase",
    storageBucket: "gooleauthwithfirebase.appspot.com",
    messagingSenderId: "602643646797",
    appId: "1:602643646797:web:2e481c02ec3b0e4ddc4f04",
    measurementId: "G-Y4MDPETSK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
