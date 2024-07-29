<script setup lang="ts">
import { useRouter } from 'vue-router'
import { type TaskEntity } from '@common/interfaces'
import TaskItem from './TaskItem.vue'

defineProps<{
    title: string,
    tasks: TaskEntity[]
}>()

const router = useRouter()

function goToEdit(taskId: number) {
    router.push({ name: 'taskEdit', params: { taskId } })
}
</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <TaskItem v-for="task in tasks"
              :data="task"
              :key="task.id"
              @click="goToEdit(task.id)" />
    </div>
</template>

<style scoped>
h3 {
    text-align: center;
}
</style>