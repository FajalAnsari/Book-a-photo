
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFireStore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDmpiKaWsZ7BdAjMX-hqyIrhT0_DAeWQRE",
  authDomain: "book-a-photo.firebaseapp.com",
  projectId: "book-a-photo",
  storageBucket: "book-a-photo.appspot.com",
  messagingSenderId: "320080193064",
  appId: "1:320080193064:web:acb8152f436f364717771d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// export const db = getFireStore(app);

export { app, auth };