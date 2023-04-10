
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFireStore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAADLjPfRS62MCrKy9JqRvJ0I_KgSPKgbA",
  authDomain: "bookaphoto-6d984.firebaseapp.com",
  projectId: "bookaphoto-6d984",
  storageBucket: "bookaphoto-6d984.appspot.com",
  messagingSenderId: "735679506302",
  appId: "1:735679506302:web:068a2e797bef1ac6a7752f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// export const db = getFireStore(app);

export { app, auth };