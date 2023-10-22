// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ6vWsH5ePh_9TQ9_fDTFTS02AgdjgFNA",
  authDomain: "sidekickapp-3da5d.firebaseapp.com",
  projectId: "sidekickapp-3da5d",
  storageBucket: "sidekickapp-3da5d.appspot.com",
  messagingSenderId: "174038946340",
  appId: "1:174038946340:web:4f355daa5a692b0fb53eb1",
  measurementId: "G-EEMW34TNRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);