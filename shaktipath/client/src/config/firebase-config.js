import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import env from "react-dotenv";
const firebaseConfig = {
  apiKey: env.FIREBASE_apiKey,
  authDomain: env.FIREBASE_authDomain,
  projectId: env.FIREBASE_projectId,
  storageBucket: env.FIREBASE_storageBucket,
  messagingSenderId: env.FIREBASE_messagingSenderId,
  appId: env.FIREBASE_appId,
  measurementId: env.FIREBASE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
