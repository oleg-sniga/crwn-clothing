import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBZB2odih94SyzKgE98v8jN8_7zIvAkbCI",
  authDomain: "crwn-clothing-db-3ccb9.firebaseapp.com",
  projectId: "crwn-clothing-db-3ccb9",
  storageBucket: "crwn-clothing-db-3ccb9.appspot.com",
  messagingSenderId: "705593133985",
  appId: "1:705593133985:web:2bd2bc0fe346ed76cad9e0"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider  = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase