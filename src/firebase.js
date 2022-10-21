// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMwo12wyS5zU4hc0z2dQrOjpRUs3qDPzc",
  authDomain: "netflix-clone-breanaj.firebaseapp.com",
  projectId: "netflix-clone-breanaj",
  storageBucket: "netflix-clone-breanaj.appspot.com",
  messagingSenderId: "166322458313",
  appId: "1:166322458313:web:9d94b91f6d0f8227b9c718",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
