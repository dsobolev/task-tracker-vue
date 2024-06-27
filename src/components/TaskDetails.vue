<script setup lang="ts">
import { computed } from 'vue';
import { type TaskEntity, TaskStatus } from '@/common/interfaces';
const props = defineProps<{
    task: TaskEntity,
}>()

const title = computed(() => `#${props.task.id} ${props.task.title}`)
const statusText = computed(() => {
    let text = ''
    switch (props.task.status) {
        case TaskStatus.ToDo:
            text = 'To Do'
            break;
        case TaskStatus.InProgress:
            text = 'In Progress'
            break;
        case TaskStatus.Done:
            text = 'Done'
            break;
    }

    return text
})
</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <span>{{ statusText }}</span>
        <p>{{ props.task.description }}</p>
    </div>
</template>
