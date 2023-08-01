// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6BrL6nuXRh_G6VHoEMu5G5jINlytCOec",
  authDomain: "whatsapp-ac5e2.firebaseapp.com",
  projectId: "whatsapp-ac5e2",
  storageBucket: "whatsapp-ac5e2.appspot.com",
  messagingSenderId: "654334501270",
  appId: "1:654334501270:web:975a2bf8d2100cfa97bdb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);

export function signIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)

}

export function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}