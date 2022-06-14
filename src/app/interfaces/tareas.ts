export interface Categories {
    categories:     Categorie[];
}


export interface Categorie {
    id:             number;
    name:           string;
    pendingTasks:   Task[];
}

export interface Task {
    id:             number;
    content:        string;
}
