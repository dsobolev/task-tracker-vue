<script setup lang="ts">
import { ref, computed } from 'vue'
import { TaskStatus, type TaskEntity } from '@common/interfaces'
import { statusLabels } from '@common/maps'

const props = defineProps<{
    task?: TaskEntity,
}>()

const emit = defineEmits({
    save: (payload: Partial<Omit<TaskEntity, "id">>) => {
        if (payload.title === undefined || payload.title === '') {
            return false
        }

        return true
    }
})

function onSave() {
    emit('save', {
        title: title.value,
        description: description.value,
        status: status.value
    })
}

const isNew = computed(() => props.task === null)

const title = ref('')
const description = ref('')
const status = ref(0)

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
                   required
                   class="input">
        </label>
        <label>
            Status
            <select v-model="status"
                    name="status"
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
            <textarea v-model="description"
                   rows="5"
                   name="description"
                   class="input" />
        </label>
        <button @click="onSave">Save</button>
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