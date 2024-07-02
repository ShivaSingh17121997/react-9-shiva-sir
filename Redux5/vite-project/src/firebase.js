// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBetXUJX-aOYf6WCjP_D8xA2art0790dU4",
    authDomain: "auth-9db44.firebaseapp.com",
    projectId: "auth-9db44",
    storageBucket: "auth-9db44.appspot.com",
    messagingSenderId: "1048291422399",
    appId: "1:1048291422399:web:427ef94fe73a3c4899960a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Auth instance
export const auth = getAuth(app);
