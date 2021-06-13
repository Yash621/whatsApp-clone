import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBTNz15vtUrLOTAXM8HjyhaV0jrXYsufM",
  authDomain: "whatsapp-clone-843d2.firebaseapp.com",
  projectId: "whatsapp-clone-843d2",
  storageBucket: "whatsapp-clone-843d2.appspot.com",
  messagingSenderId: "43858037958",
  appId: "1:43858037958:web:2a64a2567cb4b8297b5bc7",
  measurementId: "G-F156KFKWQP",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
