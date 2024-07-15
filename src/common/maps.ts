import { TaskStatus } from '@common/interfaces'

export const statusLabels = new Map<number, string>([
    [TaskStatus.ToDo, "To Do"],
    [TaskStatus.InProgress, "In Progress"],
    [TaskStatus.Done, "Done"],
])