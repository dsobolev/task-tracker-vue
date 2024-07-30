<script setup lang="ts">
import { ref, computed } from 'vue'
import { TaskStatus, type TaskEntity } from '@common/interfaces'
import { statusLabels } from '@common/maps'
import BackToGrid from '@components/BackToGrid.vue'

const props = defineProps<{
    task?: TaskEntity,
}>()

const isNoTitle = ref(false)
const emit = defineEmits<{
    save: [payload: Partial<Omit<TaskEntity, "id">>]
}>()

function onSave() {
    if (!title.value) {
        isNoTitle.value = true
    } else {
        isNoTitle.value = false

        emit('save', {
            title: title.value,
            description: description.value,
            status: status.value
        })
    }
}

const title = ref('')
const description = ref('')
const status = ref(0)

const taskStatus = computed(() => props.task
    ? props.task.status
    : TaskStatus.ToDo
)

</script>

<template>
    <div class="main">
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
                    disabled
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

.main {
    position: relative;
    border-radius: 1em;
    padding: 2em;
    width: 50em;
    background-color: white;
}

.warning {
    color: red;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 0.5em;
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