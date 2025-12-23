<script setup lang="ts">
const md = `
::alert
Hello MDC
::
`
</script>

<template>
  <div>
    <MDC :value="md" tag="article" />
  </div>
</template>
