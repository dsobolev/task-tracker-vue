<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
    type ApiInterface,
    type TaskDetailsResponse,
    type CreateTaskPayload
} from '@common/Api'
import { type TaskEntity } from '@/common/interfaces'
import TaskEdit from '@components/TaskEdit.vue'
import RequestProcess from '@components/RequestProcess.vue'

const Api = inject('Api') as ApiInterface
const router = useRouter()
const route = useRoute()

const loading = ref(true)
const success = ref(false)
const error = ref(false)
const task = ref<TaskEntity | null>(null)

Api.getTask(parseInt(route.params.taskId as string)).then((data: TaskDetailsResponse) => {
    task.value = data.taskData as TaskEntity
    loading.value = false
})

function onTaskSave(payload: CreateTaskPayload) {
    Api.createTask(payload)
        .then(() => {
            success.value = true
            setTimeout(() => {
                router.push({ name: 'tasksGrid' })
            }, 700)
        })
        .catch((e) => {
            error.value = true
            console.error(e)
        })
}
</script>

<template>
    <div class="task-view">
        <RequestProcess :is-success="success"
                        success-msg="Updated succesfully!"
                        :is-error="error"
                        error-msg="Not updated! See error in the console." />
        <TaskEdit v-if="task !== null"
                  :task="task"
                  class="task"
                  @save="onTaskSave"/>
    </div>
</template>
