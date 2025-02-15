import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACY41AVcYBDObv56_CqoFD-7h1T_pbISo",
  authDomain: "notes-snippet.firebaseapp.com",
  databaseURL: "https://notes-snippet-default-rtdb.firebaseio.com",
  projectId: "notes-snippet",
  storageBucket: "notes-snippet.firebasestorage.app",
  messagingSenderId: "353843503023",
  appId: "1:353843503023:web:3e608ef922a444a2c9995a"
};

export const app = initializeApp(firebaseConfig);