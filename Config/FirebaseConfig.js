// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKWIh9FdzFfuInzyhXSBujoj81ApfDW5Y",
    authDomain: "elearn-bf4e9.firebaseapp.com",
    projectId: "elearn-bf4e9",
    storageBucket: "elearn-bf4e9.firebasestorage.app",
    messagingSenderId: "1052217057269",
    appId: "1:1052217057269:web:b7a72470c743b0512d8abc",
    measurementId: "G-4PW4NB9HGW"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, auth, firestore };
