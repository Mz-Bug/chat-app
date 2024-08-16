import { initializeApp } from 'firebase/app';
import "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz5I4a0r9dqt5na3d8OFCCKhIQvDDzsRw",
  authDomain: "intouch-a6447.firebaseapp.com",
  projectId: "intouch-a6447",
  storageBucket: "intouch-a6447.appspot.com",
  messagingSenderId: "589684253511",
  appId: "1:589684253511:web:86ca6afec5bb824804e262"
};
let app = initializeApp(firebaseConfig);
let firebaseauth = app.auth
 export {
   firebaseauth
 }
