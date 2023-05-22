import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7K0T3RrvNBfXFf64zYvz08duj2LHO6qk",
  authDomain: "login-auth-d2384.firebaseapp.com",
  databaseURL: "https://login-auth-d2384-default-rtdb.firebaseio.com",
  projectId: "login-auth-d2384",
  storageBucket: "login-auth-d2384.appspot.com",
  messagingSenderId: "760242066355",
  appId: "1:760242066355:web:a25f19b613f29115f0f1c6",
  measurementId: "G-PB2BP37GG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
