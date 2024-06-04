<script setup lang="ts">
    
</script>

<template>
    <div class="grid-wrapper">
        <div>To Do</div>
        <div>In Progress</div>
        <div>Done</div>
    </div>
</template>

<style scoped>
.grid-wrapper {
    display: grid;
    column-gap: 2em;
    grid-template-columns: repeat(3, 1fr);
}
</style>