<script setup lang="ts">
import { inject, ref, computed } from 'vue'
import { type ApiInterface, type allTasksResponse } from '../common/Api'
import { TaskStatus, type TaskEntity } from '../common/interfaces'
import TasksColumn from './TasksColumn.vue'

const Api = inject('Api') as ApiInterface
const loading = ref(true)
const tasks = ref<TaskEntity[]>([])

const toDoList = computed(() => {
    return tasks.value.filter((task: TaskEntity) => task.status === TaskStatus.ToDo)
})

const inProgressList = computed(() => {
    return tasks.value.filter((task: TaskEntity) => task.status === TaskStatus.InProgress)
})

const doneList = computed(() => {
    return tasks.value.filter((task: TaskEntity) => task.status === TaskStatus.Done)
})

Api.getAllTasks().then((data: allTasksResponse) => {
    loading.value = false
    tasks.value = data.tasks
})
</script>

<template>
    <div v-if="loading">loading...</div>
    <div v-else
         class="grid-wrapper">
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
    margin-right: 2em;
}
</style>