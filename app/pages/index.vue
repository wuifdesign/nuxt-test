<script setup lang="ts">
const { data } = await useFetch('/api/quote')
</script>

<template>
  <div>
    Index Page {{ data }}
  </div>
</template>
