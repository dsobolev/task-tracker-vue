<script setup lang="ts">
import { ref, computed } from 'vue'
import { TaskStatus } from '@common/interfaces'
import { statusLabels } from '@common/maps'

const props = defineProps<{
    task?: TaskEntity,
}>()

const isNew = computed(() => props.task === null)

const title = ref('')
const description = ref('')


const status = statusLabels.get(TaskStatus.ToDo)
const taskStatus = computed(() => props.task
    ? props.task.status
    : TaskStatus.ToDo
)

</script>

<template>
    <div>
        <label>
            Title
            <input v-model="title"
                   name="title">
        </label>
        <label>
            Status
            <select name="status">
                <option v-for="entry in statusLabels.entries()"
                        :selected="entry[0] === taskStatus"
                        :value="entry[0]">
                    {{ entry[1] }}
                </option>
            </select>
        </label>
        <label>
            Description
            <input v-modle="description"
                   name="description">
        </label>
    </div>
</template>

<style scoped>
select {
    font-size: 1em;
    padding: 0.5em 1em;
    border: 1px solid dimgrey;
    border-radius: 10px;
    margin-bottom: 1em;
    background-color: white;
}
</style>