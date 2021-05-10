import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbAqRW1jGrsM80LYMEL2HO--TrRhgvOTM",
  authDomain: "pictofy-9de52.firebaseapp.com",
  projectId: "pictofy-9de52",
  storageBucket: "pictofy-9de52.appspot.com",
  messagingSenderId: "175088272188",
  appId: "1:175088272188:web:294d4b401de2b32850d439",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
