// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkgxug0fdKvcS8ZJwD3TfYabfUxasWHaY",
    authDomain: "my-login-95c33.firebaseapp.com",
    projectId: "my-login-95c33",
    storageBucket: "my-login-95c33.firebasestorage.app",
    messagingSenderId: "425531427167",
    appId: "1:425531427167:web:6ea79ba9e46c4958ae0eea"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;