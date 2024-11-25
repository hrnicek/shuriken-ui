<script setup lang="ts">
definePageMeta({
  layout: 'changelog',
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

// Page not found, set correct status code on SSR
if (!page.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
  </div>
</template>
