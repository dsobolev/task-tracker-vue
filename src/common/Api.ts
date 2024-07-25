import { type TaskEntity } from './interfaces'

export type allTasksResponse = {
    tasks: TaskEntity[]
}

export type TaskDetailsResponse = {
    taskData: TaskEntity
}

export interface ApiInterface {
    getAllTasks(): Promise<allTasksResponse>;
    getTask(id: number): Promise<TaskDetailsResponse>
}

export class Api implements ApiInterface {
    readonly base: string;

    constructor(baseUri: string) {
        this.base = baseUri
    }

    async getAllTasks(): Promise<allTasksResponse> {
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
