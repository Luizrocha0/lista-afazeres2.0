import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCEr4RA_DVRuwo7SRI1JQHRws-Reoru2pU",
  authDomain: "curso-68dd2.firebaseapp.com",
  projectId: "curso-68dd2",
  storageBucket: "curso-68dd2.firebasestorage.app",
  messagingSenderId: "338619301379",
  appId: "1:338619301379:web:0efd6436eb16ce04909836",
  measurementId: "G-W5D7TVRYDK"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db= getFirestore(firebaseApp)

export {db, auth};