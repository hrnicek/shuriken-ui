<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})

useSeoMeta({
  title: 'Playground',
  description: 'Take Shuriken UI for a spin!',
})
</script>

<template>
  <div>
    <Navbar />
    <PlaygroundWrapper />
    <SiteFooter />
  </div>
</template>
