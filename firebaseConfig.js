import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDyKiIEiki5j-KJTiIMrw1IWe-EjUEnQHo",
  authDomain: "fir-shoppy-a158a.firebaseapp.com",
  projectId: "fir-shoppy-a158a",
  storageBucket: "fir-shoppy-a158a.appspot.com",
  messagingSenderId: "839664620674",
  appId: "1:839664620674:web:1ee4a9e6d20e24a798109b",
  measurementId: "G-TJ4NXCDLG7"
}


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 
export { auth };

export const db = getFirestore(app);