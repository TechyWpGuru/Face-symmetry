// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDf1dyN-Hi9GvuNqbyLLaK8b-svAFXFQ0",
  authDomain: "fir-testing-42c47.firebaseapp.com",
  projectId: "fir-testing-42c47",
  storageBucket: "fir-testing-42c47.appspot.com",
  messagingSenderId: "495197232583",
  appId: "1:495197232583:web:b3976f26aa7e063e114de2",
  measurementId: "G-HTLCZTPYQF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
