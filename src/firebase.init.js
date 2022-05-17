// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvxrkqvR0eaespCM1ZF7iTTV9HV0n8t_k",
    authDomain: "demystify-backend.firebaseapp.com",
    projectId: "demystify-backend",
    storageBucket: "demystify-backend.appspot.com",
    messagingSenderId: "376688954322",
    appId: "1:376688954322:web:d1c9186bf16691eaac560b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;