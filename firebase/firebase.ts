import firebase from "firebase";

firebase.initializeApp({
    authDomain: "todos-6a4f8.firebaseapp.com",
    projectId: "todos-6a4f8",
});

export const db = firebase.firestore();
