// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDomwwNvlhipJ1nxPtPGnRcjFPfuPIc1D4",
  authDomain: "ai-trip-planner-11.firebaseapp.com",
  projectId: "ai-trip-planner-11",
  storageBucket: "ai-trip-planner-11.firebasestorage.app",
  messagingSenderId: "1037838366617",
  appId: "1:1037838366617:web:abe8e7c60c6b3d598b8508",
  measurementId: "G-X7YS710S41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app); 
// const analytics = getAnalytics(app);