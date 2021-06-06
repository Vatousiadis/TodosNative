export interface addProps {
    thenFunction: () => null;
    title: string;
    description: string;
}

export interface deleteProps {
    docId: string;
    thenFunction: () => null;
}

export interface completedProps {
    completed: boolean;
    docId: string;
    setRender: () => void;
}

export interface editProps {
    title: string;
    description: string;
    docId: string;
    thenFunction: () => null;
}