<script setup lang="ts">
definePageMeta({
  layout: 'custom',
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
