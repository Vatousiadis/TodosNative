import { db } from './firebase'

export interface addProps {
    thenFunction: () => null;
    title: string;
    description: string;
}

export const add = ({ thenFunction, title, description }: addProps) => {
    db.collection("Todos").add({
        title: title,
        description: description,
        completed: false,
        timestamp: new Date().valueOf()
    })
        .then((docRef) => {
            thenFunction();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export interface deleteProps {
    docId: string;
    thenFunction: () => null;
}

export const deleteItem = ({ thenFunction, docId }: deleteProps) => {
    db.collection("Todos").doc(docId).delete().then(() => {
        thenFunction();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export interface completedProps {
    completed: boolean;
    docId: string;
    setRender: () => void;
}

export const completedUpdate = ({ completed, docId, setRender }: completedProps) => {
    db.collection("Todos").doc(docId).update({
        completed: !completed
    }).then(() => {
        setRender()
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}

export interface editProps{
    title:string;
    description:string;
    docId:string;
    thenFunction: () => null;
}

export const edit=({title,description,docId, thenFunction}:editProps)=>{
    db.collection("Todos").doc(docId).update({
        title:title,
        description:description,
    }).then(() => {
        thenFunction()
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}