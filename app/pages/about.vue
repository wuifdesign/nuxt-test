<script setup lang="ts">
const { data: fooPost } = await useAsyncData(() => queryCollection('content').path('/blog/foo').first())
</script>

<template>
  About Page
  <ContentRenderer v-if="fooPost" :value="fooPost" />

</template>
