<script setup lang="ts">
import { inject, ref, reactive } from 'vue';
import { type ApiInterface, type allTasksResponse } from '../common/Api'
import { TaskStatus, type TaskEntity } from '../common/interfaces'
import TasksGrid from '../components/TasksGrid.vue'

const Api = inject('Api') as ApiInterface
const loading = ref(true)
const tasks = ref<TaskEntity[]>([])

Api.getAllTasks().then((data: allTasksResponse) => {
    tasks.value = data.tasks
    loading.value = false
})
</script>

<template>
    <div>
        <div v-if="loading">loading...</div>
        <TasksGrid v-else
                  :tasks="tasks"/>
    </div>
</template>

<style scoped>
div {
    margin-right:2em;
}
</style>
