// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBp3VjqQZRVfbt7xpEmOfruwQvBgk1afYo",
    authDomain: "student-hub-9bbd8.firebaseapp.com",
    projectId: "student-hub-9bbd8",
    storageBucket: "student-hub-9bbd8.appspot.com",
    messagingSenderId: "268329397516",
    appId: "1:268329397516:web:796b2978f542f5a6a76d29",
    measurementId: "G-FHQ1VTXX6S"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};