<script setup lang="ts">
const i18nHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
}))
</script>
<template>
  <NuxtLayout>
    <div>
      <nav>
        <ul>
          <li><NuxtLink class="underline text-blue-500" to="/">Index</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-500" to="/about">About</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-500" to="/about-2">About 2</NuxtLink></li>
          <li><NuxtLink class="underline text-blue-500" to="/about-3">About 3</NuxtLink></li>
        </ul>
      </nav>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <NuxtRouteAnnouncer />
      <NuxtTime :datetime="Date.now()" />
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
