<script setup lang="ts">
import { type TaskEntity } from '../common/interfaces'
import Task from './Task.vue'

defineProps<{
    title: string,
    tasks: TaskEntity[]
}>()
</script>

<template>
    <h3>{{ title }}</h3>
    <Task v-for="task in tasks"
          :data="task"
          :key="task.id" />
</template>

<style scoped>

</style>