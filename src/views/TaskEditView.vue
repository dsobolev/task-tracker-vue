<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { type ApiInterface } from '@common/Api'
import { type TaskEntity } from '@common/interfaces'
import TaskDetails from '@components/TaskDetails.vue'

const route = useRoute()
const Api = inject('Api') as ApiInterface
const task = ref<TaskEntity | null>(null)
const loading = ref(true)

Api.getTask(route.params.taskId).then((data: {taskData: TaskEntity}) => {
    task.value = data.taskData
    loading.value = false
})
</script>

<template>
    <div class="single-task">
        <div v-if="loading">loading...</div>
        <TaskDetails v-else
                     :task="task" />
    </div>
</template>
