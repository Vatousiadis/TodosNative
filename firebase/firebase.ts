import firebase from 'firebase';

firebase.initializeApp({
    // apiKey: "AIzaSyD78UwcbmHcGYV_G8MHqoncWwDlGrQ_XcM",
    authDomain: "todos-6a4f8.firebaseapp.com",
    projectId: "todos-6a4f8",
});

export const db = firebase.firestore();