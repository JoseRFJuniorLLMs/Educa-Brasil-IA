import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importando Firestore

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAK0yujOTtJQwqI6YWGwQW4fKnppz8H9Gk",
  authDomain: "ebia2025.firebaseapp.com",
  projectId: "ebia2025", 
  storageBucket: "ebia2025.appspot.com",
  messagingSenderId: "815609403711",
  appId: "1:815609403711:web:3ba2b87da0e3593eef5b8a",
  measurementId: "G-1L797Z7X95"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = getFirestore(app); // Crie a instância do Firestore

// Exportando o db para uso em outros componentes
export { app, db };
