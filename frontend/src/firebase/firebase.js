import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbUqSd5lTSLAHKeoXEtHH118S3hjm7G4E",
  authDomain: "projectauth-4e7e8.firebaseapp.com",
  projectId: "projectauth-4e7e8",
  storageBucket: "projectauth-4e7e8.appspot.com",
  messagingSenderId: "995591877378",
  appId: "1:995591877378:web:765811f054fb41ff2fc81b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
