<script setup lang="ts">
const fooPost = await queryCollection('content').path('/blog/foo').first()
</script>

<template>
  About Page
  <ContentRenderer v-if="fooPost" :value="fooPost" />

</template>
