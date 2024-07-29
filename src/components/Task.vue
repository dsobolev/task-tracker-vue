<script setup lang="ts">
import { type TaskEntity } from '@common/interfaces'
import { computed } from 'vue'

const props = defineProps<{
    data: TaskEntity
}>()
const taskTitle = computed(() => `#${props.data.id} ${props.data.title}`)
</script>

<template>
    <div>
        <h4>{{ taskTitle }}</h4>
    </div>
</template>

<style scoped>
div {
    padding: 0.5em;
    margin-bottom: 0.5em;
    border: 1px solid lightgrey;
    border-radius: 3px;
    cursor: pointer;
}
</style>