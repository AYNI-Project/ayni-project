// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-FBSBtoZ8QbmF__XUH8yMuwM8thku34",
  authDomain: "react-loginauth-2caee.firebaseapp.com",
  projectId: "react-loginauth-2caee",
  storageBucket: "react-loginauth-2caee.appspot.com",
  messagingSenderId: "816198891053",
  appId: "1:816198891053:web:84f1906e0239811543eaa4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
