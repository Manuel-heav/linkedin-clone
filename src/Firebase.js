import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCuw5K2h1JnYkJgbskKN4UhqjIZgMP5xdw",
  authDomain: "linkedin-clone-7b7b8.firebaseapp.com",
  projectId: "linkedin-clone-7b7b8",
  storageBucket: "linkedin-clone-7b7b8.appspot.com",
  messagingSenderId: "769414044645",
  appId: "1:769414044645:web:22d79c8e4bcf3102b42d0c",
  measurementId: "G-S219JX67XW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };