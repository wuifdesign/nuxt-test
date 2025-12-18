<script setup lang="ts">
const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<template>
  Index Page {{ data }}
</template>
