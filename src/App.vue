<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function newTask() {
    router.push({ name: 'taskNew' })
}
</script>

<template>
    <header>
        <h1>Track Your Tasks</h1>
    </header>

    <div class="wrapper">
        <aside>
            <button @click="newTask">+ Add Task</button>
        </aside>

        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

header h1 {
    text-align: center;
}

.wrapper {
    display: flex;
    flex-wrap: 1;
    gap: 2em;
}

aside {
    flex-basis: 20em;
    flex-grow: 1;
    height: 100vw;
    padding-top: 1em;
    padding-left: 1em;
    background-color: #f5f5f5;
}

main {
    flex-basis: 0;
    flex-grow: 999;
}
</style>

<style>
button {
    padding: 0.5em 1em;
    border: 1px solid dimgrey;
    border-radius: 10px;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 0.5em;
}

.task-view {
    height: 100vw;
    padding-top: 5em;
    background-color: #cfd8dc;
}

.task-view > .task {
    margin: auto;
}

.task {
    position: relative;
    border-radius: 1em;
    padding: 2em;
    width: 50em;
    background-color: white;
}
</style>
