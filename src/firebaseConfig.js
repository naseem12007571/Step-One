// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXq-3XKywwUI5pKUKtAwdLUoxeMUU6Xwg",
  authDomain: "step-one-a0b4c.firebaseapp.com",
  projectId: "step-one-a0b4c",
  storageBucket: "step-one-a0b4c.appspot.com",
  messagingSenderId: "82017726918",
  appId: "1:82017726918:web:05fae70da39ad354f9c2c7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
