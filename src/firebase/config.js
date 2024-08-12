// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Shw1HuDA_ktPC450hdCJPWevGB5ktSs",
  authDomain: "photo-app-5c7ba.firebaseapp.com",
  projectId: "photo-app-5c7ba",
  storageBucket: "photo-app-5c7ba.appspot.com",
  messagingSenderId: "341442240007",
  appId: "1:341442240007:web:6eefda9b03804cf4ea14a2",
  measurementId: "G-E6GEPTHR0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }