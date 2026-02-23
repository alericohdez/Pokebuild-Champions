// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <-- Importa Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBQviUbGkqTSkLtYVQCJks0Mc-vwaZ81vs",
  authDomain: "pokebuild-champions.firebaseapp.com",
  projectId: "pokebuild-champions",
  storageBucket: "pokebuild-champions.firebasestorage.app",
  messagingSenderId: "295400041518",
  appId: "1:295400041518:web:94caef7630206b300843bf"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta db para usarlo en otros archivos
export { db };