import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Import Seed database.
// import {seedDatabase} from '../seed'

//Firebase config.
const config = {
  apiKey: "AIzaSyBqvk0R5Xx4jJ8iFYBI91MDhRprhM1rw20",
  authDomain: "social-mittens.firebaseapp.com",
  projectId: "social-mittens",
  storageBucket: "social-mittens.appspot.com",
  messagingSenderId: "468261825562",
  appId: "1:468261825562:web:2b691ccc67a56e9ca7b5a3",
};

//Initialize the firebase
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Call the seed file to populate the database {Please do it once haha!!!}
// seedDatabase(firebase);

export { firebase, FieldValue };
