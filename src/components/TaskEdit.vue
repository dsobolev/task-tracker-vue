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
                   name="title"
                   class="input">
        </label>
        <label>
            Status
            <select name="status"
                    disabled
                    class="input">
                <option v-for="entry in statusLabels.entries()"
                        :selected="entry[0] === taskStatus"
                        :value="entry[0]">
                    {{ entry[1] }}
                </option>
            </select>
        </label>
        <label>
            Description
            <textarea v-modle="description"
                   rows="5"
                   name="description"
                   class="input" />
        </label>
    </div>
</template>

<style scoped>
label {
    display: block;
    margin-bottom: 2em;
}

input, textarea {
    display: block;
    width: 100%;
}

.input {
    font-size: 1em;
    padding: 0.5em 1em;
    border-radius: 10px;
    background-color: white;
    border: 1px solid dimgrey;
}

</style>