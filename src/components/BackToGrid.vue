<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function onClick() {
    router.push({ name: 'tasksGrid' })
}
</script>

<template>
    <span @click="onClick">&#10005;</span>
</template>

<style scoped>
span {
    display: inline-block;
    font-size: 2em;
    cursor: pointer;
    user-select: none;
}
</style>