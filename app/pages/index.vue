<script setup lang="ts">
const { data } = await useFetch('/api/quote')
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)" class="border p-2 hover:bg-gray-100">
      {{ locale.name }}
    </button>
    <h1 class="text-2xl">{{ $t('welcome') }}</h1>
    <h1>{{ $t('btn.submit') }}</h1>
    <h1>{{ $t('yes') }}</h1>
    Index Page {{ data }}
  </div>
</template>
