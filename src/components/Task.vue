<script setup lang="ts">
import { TaskStatus, type TaskEntity } from './interfaces'
import { computed } from 'vue'

const props = defineProps<{
    data: TaskEntity
}>()

const taskTitle = computed(() => {
    return props.data.title
})

const taskStatus = computed(() => {
    switch (props.data.status) {
        case TaskStatus.ToDo:
            return 'To Do'
        case TaskStatus.InProgress:
            return 'In Progress'
        case TaskStatus.Done:
            return 'Done'
    }
})
</script>

<template>
    <div>
        <h4>{{ taskTitle }}</h4>
        <p>{{ taskStatus }}</p>
    </div>
</template>

<style scoped>
</style>