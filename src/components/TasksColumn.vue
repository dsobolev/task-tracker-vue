<script setup lang="ts">
import { type TaskEntity } from '../common/interfaces'
import Task from './Task.vue'

defineProps<{
    title: string,
    tasks: TaskEntity[]
}>()
</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <Task v-for="task in tasks"
              :data="task"
              :key="task.id" />
    </div>
</template>

<style scoped>
h3 {
    text-align: center;
}
</style>