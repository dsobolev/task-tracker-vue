import { type TaskEntity } from './interfaces'

export type AllTasksResponse = {
    tasks: TaskEntity[]
}

export type TaskDetailsResponse = {
    taskData: TaskEntity
}

export interface ApiInterface {
    getAllTasks(): Promise<AllTasksResponse>;
    getTask(id: number): Promise<TaskDetailsResponse>
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
}
