import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByFu7LNcSVG0XRJ8VQsO0NeNj772OaRaA",
  authDomain: "facebook-clone-355714.firebaseapp.com",
  projectId: "facebook-clone-355714",
  storageBucket: "facebook-clone-355714.appspot.com",
  messagingSenderId: "343714535310",
  appId: "1:343714535310:web:3ffd745e7d610a3291f6df",
  measurementId: "G-2GELP0RYR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);

export { db, storage }