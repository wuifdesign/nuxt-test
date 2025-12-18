<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <NuxtTime :datetime="Date.now()" />
  </div>
</template>
