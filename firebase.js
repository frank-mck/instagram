// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj5W-PbFCYJ6OEw-RaqBoSM7yF_7JiQho",
  authDomain: "instagram-yt-build.firebaseapp.com",
  projectId: "instagram-yt-build",
  storageBucket: "instagram-yt-build.appspot.com",
  messagingSenderId: "969799820850",
  appId: "1:969799820850:web:73b0d3c46fc05067c43e2b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };