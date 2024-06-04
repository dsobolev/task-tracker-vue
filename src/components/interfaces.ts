export enum TaskStatus {
    ToDo,
    InProgress,
    Done,
}

export interface TaskEntity {
    title: string;
    status: TaskStatus;
    description?: string;
}