import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCSK0gND-lEkWTDIWgRriaUruwWoAIEhGg",
    authDomain: "gamais-academy.firebaseapp.com",
    databaseURL: "https://gamais-academy.firebaseio.com",
    projectId: "gamais-academy",
    storageBucket: "gamais-academy.appspot.com",
    messagingSenderId: "134767109197",
    appId: "1:134767109197:web:510f7891bb9c7902dfa804"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export { firebase };