<script setup lang="ts">
import { computed } from 'vue'
import { type TaskEntity, TaskStatus } from '@common/interfaces'
import BackToGrid from '@components/BackToGrid.vue'

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
        <BackToGrid class="close-btn" />

        <h3>{{ title }}</h3>
        <span>{{ statusText }}</span>
        <p>{{ props.task.description }}</p>
    </div>
</template>

<style scoped>
h3 {
    margin-bottom: 1em;
}
</style>
