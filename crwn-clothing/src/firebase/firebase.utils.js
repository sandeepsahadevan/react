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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
