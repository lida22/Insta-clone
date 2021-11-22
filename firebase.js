import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3o0Z59vgrQmGyYiC5MqP5gWCdKFQh5DQ",
  authDomain: "instagram-clone-7e43a.firebaseapp.com",
  projectId: "instagram-clone-7e43a",
  storageBucket: "instagram-clone-7e43a.appspot.com",
  messagingSenderId: "523692402320",
  appId: "1:523692402320:web:17f14d3df5275fad489a15"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };