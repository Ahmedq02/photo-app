import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

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

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore }