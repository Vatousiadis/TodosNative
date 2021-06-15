export interface addProps {
    thenFunction: () => void;
    title: string;
    description: string;
}

export interface deleteProps {
    docId: string;
    thenFunction: () => void;
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
    thenFunction: () => void;
}