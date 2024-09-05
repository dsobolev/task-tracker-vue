<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { type ApiInterface, type TaskDetailsResponse } from '@common/Api'
import { type TaskEntity } from '@common/interfaces'
import TaskDetails from '@components/TaskDetails.vue'

const route = useRoute()
const Api = inject('Api') as ApiInterface
const task = ref<TaskEntity | null>(null)
const loading = ref(true)

Api.getTask(parseInt(route.params.taskId as string)).then((data: TaskDetailsResponse) => {
    task.value = data.taskData as TaskEntity
    loading.value = false
})
</script>

<template>
    <div class="task-view">
        <div v-if="loading">loading...</div>
        <template v-else>
            <TaskDetails class="task"
                         :task="task" />
        </template>
    </div>
</template>
