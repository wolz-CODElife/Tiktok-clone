import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnUaScNKpiK0sZRYa3Qddbj8OQ_PoqtiM",
    authDomain: "wctiktok-clone.firebaseapp.com",
    projectId: "wctiktok-clone",
    storageBucket: "wctiktok-clone.appspot.com",
    messagingSenderId: "765494881538",
    appId: "1:765494881538:web:5d36f4d2d002253c54a61b",
    measurementId: "G-ES2BY3SEMM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
  
const db = firebaseApp.firestore()

export default db