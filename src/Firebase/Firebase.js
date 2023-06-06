// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX0mfJSc5NWNhZn-DZiyYGoTPQv1ccols",
  authDomain: "kisan-network-3922f.firebaseapp.com",
  projectId: "kisan-network-3922f",
  storageBucket: "kisan-network-3922f.appspot.com",
  messagingSenderId: "608837916572",
  appId: "1:608837916572:web:e5f8851e66e1fd71ae5a59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const kisanDetails = collection(db,"kisan" )
export const verifiedDatas = collection(db,"verified" )
export default app;