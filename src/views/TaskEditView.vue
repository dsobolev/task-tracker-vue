<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const id = route.params.taskId
</script>

<template>
    <div>
        <h3>Title with #{{ id }}</h3>
        <span>In Progress</span>
        <p>Description here</p>
    </div>
</template>

<style scoped>

</style>