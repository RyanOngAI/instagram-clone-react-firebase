import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZakR5jAtDmeRonhcKCNUvVOci8Dzhao8",
  authDomain: "instagram-clone-28b89.firebaseapp.com",
  databaseURL: "https://instagram-clone-28b89.firebaseio.com",
  projectId: "instagram-clone-28b89",
  storageBucket: "instagram-clone-28b89.appspot.com",
  messagingSenderId: "602572158203",
  appId: "1:602572158203:web:ecc8ea4e4319c8f0d66c5e",
  measurementId: "G-94CZJ0P30B",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
