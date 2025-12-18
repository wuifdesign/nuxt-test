<script setup lang="ts">
const { data } = await useFetch('https://dummyjson.com/quotes/random')
</script>

<template>
  Index Page {{ data }}
</template>
