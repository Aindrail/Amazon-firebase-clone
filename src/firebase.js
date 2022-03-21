import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyBL6yj1-ZNcR6qvN22_CnNNmrD90ezz3vg",
    // authDomain: "clone-mar21.firebaseapp.com",
    // projectId: "clone-mar21",
    // storageBucket: "clone-mar21.appspot.com",
    // messagingSenderId: "781350103372",
    // appId: "1:781350103372:web:a86eda03286270903707e9",
    // measurementId: "G-4RQMTWZN67"
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