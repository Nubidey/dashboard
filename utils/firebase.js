// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTvvGRJx3QjFqYpajsR9mpi0hcxWLYZiw",
  authDomain: "webauthnext-2.firebaseapp.com",
  projectId: "webauthnext-2",
  storageBucket: "webauthnext-2.appspot.com",
  messagingSenderId: "503688995690",
  appId: "1:503688995690:web:554d0ba6d6e85331553b13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);