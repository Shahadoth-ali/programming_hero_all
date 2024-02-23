// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZoHCXy8jhSZAEfr6VFu5Eafb8ziQsS8U",
  authDomain: "user-email-password-auth-8b4a9.firebaseapp.com",
  projectId: "user-email-password-auth-8b4a9",
  storageBucket: "user-email-password-auth-8b4a9.appspot.com",
  messagingSenderId: "858412570437",
  appId: "1:858412570437:web:cc998ad74901c1f886902c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;