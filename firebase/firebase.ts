import firebase from "firebase";
// import { db } from "./firebase";
import { addProps, deleteProps, completedProps, editProps } from "./modelProps";

firebase.initializeApp({
    authDomain: "todos-6a4f8.firebaseapp.com",
    projectId: "todos-6a4f8",
});

export const firebaseAction = {
    add: ({ thenFunction, title, description }: addProps) => {
        firebase
            .firestore()
            .collection("Todos")
            .add({
                title: title,
                description: description,
                completed: false,
                timestamp: new Date().valueOf(),
            })
            .then((docRef) => {
                thenFunction();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    },
    deleteItem: ({ thenFunction, docId }: deleteProps) => {
        firebase
            .firestore()
            .collection("Todos")
            .doc(docId)
            .delete()
            .then(() => {
                thenFunction();
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    },
    completedUpdate: ({ completed, docId, setRender }: completedProps) => {
        firebase
            .firestore()
            .collection("Todos")
            .doc(docId)
            .update({
                completed: !completed,
            })
            .then(() => {
                setRender();
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    },
    edit: ({ title, description, docId, thenFunction }: editProps) => {
        firebase
            .firestore()
            .collection("Todos")
            .doc(docId)
            .update({
                title: title,
                description: description,
            })
            .then(() => {
                thenFunction();
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    },
    fetch: async () => {
        let todosArr: any = [];
        const snapshot = await firebase.firestore().collection("Todos").get();
        snapshot.forEach((doc) => {
            todosArr.push({ ...doc.data(), id: doc.id });
        });
        
        return todosArr;
    },
};
