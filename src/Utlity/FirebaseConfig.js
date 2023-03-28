
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAsOapSMM4YuP-nPFu97R8ZNc44RLGTTPg",
  authDomain: "gobikes-strugend.firebaseapp.com",
  projectId: "gobikes-strugend",
  storageBucket: "gobikes-strugend.appspot.com",
  messagingSenderId: "729329111799",
  appId: "1:729329111799:web:8bdb1e9971bc8068a579f2",
  measurementId: "G-090YS7XH1Q"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider()
export {auth,provider}