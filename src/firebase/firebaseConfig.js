import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcO3ruK2mEiU1jOIcYMEguaevizk_GjeY",
  authDomain: "todo-fn22.firebaseapp.com",
  projectId: "todo-fn22",
  storageBucket: "todo-fn22.appspot.com",
  messagingSenderId: "854156389244",
  appId: "1:854156389244:web:508f8e19d7a4dad4a5d2f9",
};

const app = initializeApp(firebaseConfig);

//auth

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
