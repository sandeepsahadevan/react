import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAneJ3i_Sq_yvgOUueuJ2Gzbb2SiUX5XNU",
  authDomain: "crwn-db-d99fb.firebaseapp.com",
  databaseURL: "https://crwn-db-d99fb.firebaseio.com",
  projectId: "crwn-db-d99fb",
  storageBucket: "crwn-db-d99fb.appspot.com",
  messagingSenderId: "899742761683",
  appId: "1:899742761683:web:b385412e230e6b88b24a26"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;