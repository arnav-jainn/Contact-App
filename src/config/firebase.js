// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWWUazftzN2MzVFzUwh9zyj0YfOKwKmO8",
  authDomain: "contactapp-6e0d8.firebaseapp.com",
  projectId: "contactapp-6e0d8",
  storageBucket: "contactapp-6e0d8.appspot.com",
  messagingSenderId: "866376034371",
  appId: "1:866376034371:web:4c07771fa680c806f24cf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);