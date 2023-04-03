import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBf2gdZdsgnPmAdYCjUa5uBf_LgHPnhnkg",
    authDomain: "whatsapp-clone-de3bf.firebaseapp.com",
    projectId: "whatsapp-clone-de3bf",
    storageBucket: "whatsapp-clone-de3bf.appspot.com",
    messagingSenderId: "53756316275",
    appId: "1:53756316275:web:1ff70b29a66afcd5f03806",
    measurementId: "G-5L9Z57X226"
  };

 
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;