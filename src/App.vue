<script setup lang="ts">
import TasksGrid from './components/TasksGrid.vue'
</script>

<template>
  <header>
    <h1>Track Your Tasks</h1>
  </header>

  <aside>
    Info panel
  </aside>

  <main>
    <TasksGrid />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header h1 {
  text-align: center;
}

aside {
  float: left;
  width: 20em;
  height: 100vw;
  margin-right: 2em;
  background-color: #f5f5f5;
}
</style>
