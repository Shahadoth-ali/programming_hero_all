// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCycdwQ4YzSINimt6-KDhrvkOYG9k6swxw",
  authDomain: "auth-moh-milon.firebaseapp.com",
  projectId: "auth-moh-milon",
  storageBucket: "auth-moh-milon.appspot.com",
  messagingSenderId: "621685539621",
  appId: "1:621685539621:web:163f33d2ea3db8b1d250cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;