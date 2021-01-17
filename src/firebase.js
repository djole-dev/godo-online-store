import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaD1fL2IzWRB-o9gdg6RRTmWZZjH4J3aM",
    authDomain: "godo-store.firebaseapp.com",
    projectId: "godo-store",
    storageBucket: "godo-store.appspot.com",
    messagingSenderId: "286916168731",
    appId: "1:286916168731:web:442650832ebd9858f7fcbe",
    measurementId: "G-E8WKBVJF3Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export { db, auth };