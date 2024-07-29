<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { type ApiInterface, type allTasksResponse } from '@common/Api'
import { type TaskEntity } from '@common/interfaces'
import TaskEdit from '@components/TaskEdit.vue'

const Api = inject('Api') as ApiInterface
const router = useRouter()

const success = ref(false)
const error = ref(false)

function onTaskSave(payload: Partial<Omit<TaskEntity, "id">>) {
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
        <div class="flashes">
            <p v-show="success"
               class="flash-msg success">
                Saved succesfully!
            </p>
            <p v-show="error"
               class="flash-msg error">
                Not saved! See error in the console.
            </p>
        </div>
        <TaskEdit class="task"
                  @save="onTaskSave"/>
    </div>
</template>

<style scoped>
.flashes {
    margin-bottom: 2em;
    text-align: center;
}

.flash-msg {
    display: inline-block;
    border-radius: 0.5em;
    padding: 1em 2em;
}

.success {
    color: #4caf50;
    background-color: #dcedc8;
}

.error {
    color: #f44336;
    background-color: #ffcdd2;
}
</style>
