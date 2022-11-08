// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyComcq4Qh6bPsNqNzEEqhdh9PkSNOBGkSk",
  authDomain: "service-review-assignmen-96920.firebaseapp.com",
  projectId: "service-review-assignmen-96920",
  storageBucket: "service-review-assignmen-96920.appspot.com",
  messagingSenderId: "921326013137",
  appId: "1:921326013137:web:3711ed4a46513c1dea93f0",
  measurementId: "G-YHDG07VE74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app 