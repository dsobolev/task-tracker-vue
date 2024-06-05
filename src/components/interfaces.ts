export enum TaskStatus {
    ToDo,
    InProgress,
    Done,
}

export interface TaskEntity {
    id: number;
    title: string;
    status: TaskStatus;
    description?: string;
}