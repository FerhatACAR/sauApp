import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn2D8GQQHpZHYigvCigMcp2_aXkYFax24",
  authDomain: "saustore-f7bb1.firebaseapp.com",
  databaseURL: "https://saustore-f7bb1-default-rtdb.firebaseio.com",
  projectId: "saustore-f7bb1",
  storageBucket: "saustore-f7bb1.appspot.com",
  messagingSenderId: "637289653885",
  appId: "1:637289653885:web:eb24d2c6e9c9b4a4d9b314",
  measurementId: "G-L05DSL8C19"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ experimentalForceLongPolling: true });
}


export { firebase };
