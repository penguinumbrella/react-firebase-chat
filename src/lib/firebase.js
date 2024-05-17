import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  //apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyB8TVB7fNwQ7tjCUxjJnijLNvMCDhqKQqU",
  authDomain: "reactchat-1c65a.firebaseapp.com",
  projectId: "reactchat-1c65a",
  storageBucket: "reactchat-1c65a.appspot.com",
  messagingSenderId: "1016560275636",
  appId: "1:1016560275636:web:901e4ecaa160860440c7e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


