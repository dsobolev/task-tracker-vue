<script setup lang="ts">

defineProps<{
    isSuccess: boolean,
    successMsg: string,
    isError: boolean,
    errorMsg: string,
}>()
</script>

<template>
    <div class="flashes">
        <p v-show="isSuccess"
           class="flash-msg success">
            {{ successMsg }}
        </p>
        <p v-show="isError"
           class="flash-msg error">
            {{ errorMsg }}
        </p>
    </div>
</template>

<style scoped>
.flashes {
    margin-bottom: 2em;
    text-align: center;
}

.flash-msg {
    display: inline-block;
    border-radius: 0.5em;
    padding: 1em 2em;
}

.success {
    color: #4caf50;
    background-color: #dcedc8;
}

.error {
    color: #f44336;
    background-color: #ffcdd2;
}
</style>
