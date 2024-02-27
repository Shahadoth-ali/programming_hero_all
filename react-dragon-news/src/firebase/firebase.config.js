// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqGdsgPwgKV35s1ezUMqmXgJHl_0wa2XM",
  authDomain: "react-dragon-news-bc634.firebaseapp.com",
  projectId: "react-dragon-news-bc634",
  storageBucket: "react-dragon-news-bc634.appspot.com",
  messagingSenderId: "943973407544",
  appId: "1:943973407544:web:5f9691e3abbbb678e8bfcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;