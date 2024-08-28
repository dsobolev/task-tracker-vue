<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { type ApiInterface, type CreateTaskPayload } from '@common/Api'
import TaskEdit from '@components/TaskEdit.vue'
import RequestProcess from '@components/RequestProcess.vue'

const Api = inject('Api') as ApiInterface
const router = useRouter()

const success = ref(false)
const error = ref(false)

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
                        success-msg="Saved succesfully!"
                        :is-error="error"
                        error-msg="Not saved! See error in the console." />
        <TaskEdit class="task"
                  @save="onTaskSave"/>
    </div>
</template>
