<script setup lang="ts">
const fooPost = await queryCollection('content').path('/blog/foo').first()
const quote: any = await useFetch(`https://dummyjson.com/quotes/random`)
</script>

<template>
  <div>
    About Page
    {{ quote }}
    <ContentRenderer v-if="fooPost" :value="fooPost" />
  </div>
</template>
