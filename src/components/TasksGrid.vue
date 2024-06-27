<script setup lang="ts">
import { computed } from 'vue'
import { TaskStatus, type TaskEntity } from '@common/interfaces'
import TasksColumn from './TasksColumn.vue'

const props = defineProps<{
    tasks: TaskEntity[]
}>()

const toDoList = computed(() => {
    return props.tasks.filter((task: TaskEntity) => task.status === TaskStatus.ToDo)
})

const inProgressList = computed(() => {
    return props.tasks.filter((task: TaskEntity) => task.status === TaskStatus.InProgress)
})

const doneList = computed(() => {
    return props.tasks.filter((task: TaskEntity) => task.status === TaskStatus.Done)
})
</script>

<template>
    <div class="grid-wrapper">
        <TasksColumn title="To Do"
                     :tasks="toDoList" />
        <TasksColumn title="In Progress"
                     :tasks="inProgressList" />
        <TasksColumn title="Done"
                     :tasks="doneList" />
    </div>
</template>

<style scoped>
.grid-wrapper {
    display: grid;
    column-gap: 2em;
    grid-template-columns: repeat(3, 1fr);
}
</style>
