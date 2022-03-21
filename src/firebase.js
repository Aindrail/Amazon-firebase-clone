import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCXuBVvxmqzsINDav2qHRyFUbSFNteMZjY",
    authDomain: "clone-reactjs-aindrail.firebaseapp.com",
    projectId: "clone-reactjs-aindrail",
    storageBucket: "clone-reactjs-aindrail.appspot.com",
    messagingSenderId: "924584867821",
    appId: "1:924584867821:web:466fb55f1c7903d47699e4",
    measurementId: "G-4WKG87GPQ9"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };