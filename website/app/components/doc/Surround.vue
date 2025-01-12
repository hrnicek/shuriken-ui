<script setup lang="ts">
const { data: page } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('content', '/docs')})
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between gap-y-6 gap-x-6 max-w-3xl mx-auto">
    <NuxtLink v-if="page?.[0]" :to="page[0].path" class="group/link inline-flex items-center gap-2 hover:bg-muted-100 dark:hover:bg-muted-800 px-3 py-2 rounded-xl text-start transition-colors duration-300">
      <Icon name="lucide:chevron-left" class="block size-4 group-hover/link:-translate-x-1 transition-transform duration-300" />
      <p class="font-sans text-sm font-medium text-muted-900 dark:text-white group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300 line-clamp-2">
        {{ page[0].title }}
      </p>
    </NuxtLink>
    <NuxtLink v-if="page?.[1]" :to="page[1].path" class="group/link inline-flex items-center justify-end gap-2 hover:bg-muted-100 dark:hover:bg-muted-800 px-3 py-2 rounded-xl text-end transition-colors duration-300">
      <p class="font-sans text-sm font-medium text-muted-900 dark:text-white group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300 line-clamp-2">
        {{ page[1].title }}
      </p>
      <Icon name="lucide:chevron-right" class="block size-4 group-hover/link:translate-x-1 transition-transform duration-300"  />
    </NuxtLink>
  </div>
</template>