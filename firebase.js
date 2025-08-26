// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFsc9bzeydATgLmx_1xVVpVtUCPFJlO1E",
  authDomain: "colomr-pm.firebaseapp.com",
  projectId: "colomr-pm",
  storageBucket: "colomr-pm.firebasestorage.app",
  messagingSenderId: "931161972007",
  appId: "1:931161972007:web:dd827bd812576915cadd02",
  measurementId: "G-XV22YRGEY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);