import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDUERLpx52jADdvKfRj3ygx7OAnzomFpmU",
  authDomain: "login-40a2f.firebaseapp.com",
  projectId: "login-40a2f",
  storageBucket: "login-40a2f.appspot.com",
  messagingSenderId: "874853666658",
  appId: "1:874853666658:web:0f851e99fd04dff4a0663b",
  measurementId: "G-LSVXTZHSC0"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}