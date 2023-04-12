// import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyAsOapSMM4YuP-nPFu97R8ZNc44RLGTTPg",
//   authDomain: "gobikes-strugend.firebaseapp.com",
//   projectId: "gobikes-strugend",
//   storageBucket: "gobikes-strugend.appspot.com",
//   messagingSenderId: "729329111799",
//   appId: "1:729329111799:web:8bdb1e9971bc8068a579f2",
//   measurementId: "G-090YS7XH1Q"
// };

// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const provider=new GoogleAuthProvider()
// export {auth,provider}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// [https://firebase.google.com/docs/web/setup#available-libraries](https://firebase.google.com/docs/web/setup#available-libraries)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCQRu_e1Cumw1r5HZRI5DWgNYw8rLX0eg",
  authDomain:
    "[brorental-ebcde.firebaseapp.com](http://brorental-ebcde.firebaseapp.com/)",
  projectId: "brorental-ebcde",
  storageBucket:
    "[brorental-ebcde.appspot.com](http://brorental-ebcde.appspot.com/)",
  messagingSenderId: "698161042705",
  appId: "1:698161042705:web:22908a06edb64fd94ba8b0",
  measurementId: "G-P8Q1HG9KNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
