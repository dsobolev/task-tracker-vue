<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { type TaskEntity, TaskStatus } from '@common/interfaces'
import BackToGrid from '@components/BackToGrid.vue'

interface TaskParam {
    task?: TaskEntity | null
}

const props = withDefaults(defineProps<TaskParam>(), {
    task: null
})

const title = computed(() => props.task !==null
    ? `#${props.task.id} ${props.task.title}`
    : ''
)

const statusText = computed(() => {
    let text = ''
    switch (props.task?.status) {
        case TaskStatus.InProgress:
            text = 'In Progress'
            break;
        case TaskStatus.Done:
            text = 'Done'
            break;
        case TaskStatus.ToDo:
        default:
            text = 'To Do'
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
        <p>{{ props.task?.description }}</p>

        <RouterLink :to="{name: 'taskEdit', params: {taskId: task?.id}}"
                    v-slot="{ navigate }">
            <button @click="navigate">Edit</button>
        </RouterLink>
    </div>
</template>

<style scoped>
h3,
p {
    margin-bottom: 1em;
}

button {
    font-size: 1rem;
    letter-spacing: 1px;
}
</style>
