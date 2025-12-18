<script setup lang="ts">
</script>
<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Index</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <RouterView />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <NuxtTime :datetime="Date.now()" />
  </div>
</template>
