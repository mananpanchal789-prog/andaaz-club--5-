// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_qCjuydQW2Ca_AiM4qvK6LtyoIpTC0U0",
  authDomain: "andaaz-club.firebaseapp.com",
  projectId: "andaaz-club",
  storageBucket: "andaaz-club.firebasestorage.app",
  messagingSenderId: "278891683663",
  appId: "1:278891683663:web:420c502f5a41e372acef3a",
  measurementId: "G-6EKB9X3ZH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);