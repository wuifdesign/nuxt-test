<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})
const fooPost = await queryCollection('content').path('/blog/foo').first()
const quote: any = await useFetch(`https://dummyjson.com/quotes/random`)
</script>

<template>
  <div>
    About2 Page
    {{ quote }}
    <ContentRenderer v-if="fooPost" :value="fooPost" />
  </div>
</template>
