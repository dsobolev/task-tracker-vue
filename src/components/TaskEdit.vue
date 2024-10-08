<script setup lang="ts">
import { ref, computed } from 'vue'
import { TaskStatus, type TaskEntity } from '@common/interfaces'
import { statusLabels } from '@common/maps'
import BackToGrid from '@components/BackToGrid.vue'

interface TaskProp {
    task?: TaskEntity | null
}

const props = withDefaults(defineProps<TaskProp>(), {
    task: null
})

const isNoTitle = ref(false)
const emit = defineEmits<{
    save: [payload: Partial<Omit<TaskEntity, "id">>]
}>()

type Payload = Partial<{
    title: string,
    description: string,
    status: number,
}>

const initialValue: Payload = {
    title: props.task?.title || '',
    description: props.task?.description || '',
    status: props.task?.status || 0,
}

function onSave() {
    if (!title.value) {
        isNoTitle.value = true
    } else {
        isNoTitle.value = false

        const payload: Payload = {}
        if (title.value !== initialValue.title) {
            payload['title'] = title.value
        }

        if (description.value !== initialValue.description) {
            payload['description'] = description.value
        }

        if (status.value !== initialValue.status) {
            payload['status'] = status.value
        }

        emit('save', payload)
    }
}

const title = ref(props.task?.title || '')
const description = ref(props.task?.description || '')
const status = ref(props.task?.status || 0)

const taskStatus = computed(() => props.task
    ? props.task.status
    : TaskStatus.ToDo
)

const isTaskEmpty = computed(() => props.task === null)
</script>

<template>
    <div>
        <BackToGrid class="close-btn" />

        <p v-show="isNoTitle"
           class="warning">
            Title is required
        </p>

        <label>
            Title
            <input v-model="title"
                   name="title"
                   required
                   class="input">
        </label>
        <label>
            Status
            <select v-model="status"
                    name="status"
                    :disabled="isTaskEmpty"
                    class="input">
                <option v-for="entry in statusLabels.entries()"
                        :selected="entry[0] === taskStatus"
                        :value="entry[0]"
                        :key="entry[0]">
                    {{ entry[1] }}
                </option>
            </select>
        </label>
        <label>
            Description
            <textarea v-model="description"
                   rows="5"
                   name="description"
                   class="input" />
        </label>
        <div class="button-row">
            <button @click="onSave">Save</button>
        </div>
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

.warning {
    color: red;
}

.input {
    font-size: 1em;
    padding: 0.5em 1em;
    border-radius: 10px;
    background-color: white;
    border: 1px solid dimgrey;
}

.button-row {
    text-align: right;
}

</style>