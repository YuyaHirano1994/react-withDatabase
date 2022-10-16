import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxtx4cmqinKj2qjOrVafRqpWwnVsK4xh8",
  authDomain: "firestore-tutorial-58dbf.firebaseapp.com",
  projectId: "firestore-tutorial-58dbf",
  storageBucket: "firestore-tutorial-58dbf.appspot.com",
  messagingSenderId: "648504972038",
  appId: "1:648504972038:web:1e464c6f6701d945bbc487",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
