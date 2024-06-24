// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOim11TtqnZulqtu1-vmVx_QpyAnvon8g",
    authDomain: "reacttodoapp-fba2e.firebaseapp.com",
    projectId: "reacttodoapp-fba2e",
    storageBucket: "reacttodoapp-fba2e.appspot.com",
    messagingSenderId: "624651028026",
    appId: "1:624651028026:web:a642cd76b8b1ac0c109703"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
export default db