// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0yujOTtJQwqI6YWGwQW4fKnppz8H9Gk",
  authDomain: "ebia2025.firebaseapp.com",
  projectId: "ebia2025",
  storageBucket: "ebia2025.firebasestorage.app",
  messagingSenderId: "815609403711",
  appId: "1:815609403711:web:3ba2b87da0e3593eef5b8a",
  measurementId: "G-1L797Z7X95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, analytics };
