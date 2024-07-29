import { type TaskEntity } from './interfaces'

export type AllTasksResponse = {
    tasks: TaskEntity[]
}

export type TaskDetailsResponse = {
    taskData: TaskEntity
}

export type CreateTaskPayload = Partial<Omit<TaskEntity, "id">>

export interface ApiInterface {
    getAllTasks(): Promise<AllTasksResponse>;
    getTask(id: number): Promise<TaskDetailsResponse>;
    createTask(payload: CreateTaskPayload): Promise<any>;
}

export class Api implements ApiInterface {
    readonly base: string;

    constructor(baseUri: string) {
        this.base = baseUri
    }

    async getAllTasks(): Promise<AllTasksResponse> {
        const response = await fetch(this.base + '/tasks/', {
            credentials: "omit",
        })

        return response.json()
    }

    async getTask(id: number): Promise<TaskDetailsResponse> {
        const response = await fetch(this.base + `/tasks/${id}`)

        return response.json()
    }

    async createTask(payload: CreateTaskPayload): Promise<boolean> {
        const response = await fetch(this.base + '/tasks/', {
            method: "POST",
            body: JSON.stringify(payload)
        })

        if (!response.ok) {
            throw new Error('Task not saved')
        }

        return true
    }
}
