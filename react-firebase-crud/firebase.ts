import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration object goes here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);