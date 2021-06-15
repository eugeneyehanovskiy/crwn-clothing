import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtaa63XUEiM_O2cR975dv9e20l0VE6v6M",
  authDomain: "crwn-db-2dbe5.firebaseapp.com",
  projectId: "crwn-db-2dbe5",
  storageBucket: "crwn-db-2dbe5.appspot.com",
  messagingSenderId: "957695801659",
  appId: "1:957695801659:web:30c4471056675ae05cdf1e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
