<script setup lang="ts">
const props = defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="flex flex-col gap-1 !pl-0 mb-14">
    <li v-for="(item, index) in props.items" :key="index" class="p-0 mb-0 mt-1 flex items-center gap-4">
      <span class="rounded-full size-6 flex-none flex items-center justify-center bg-muted-900/5 dark:bg-white/20 border border-primary-500/10 dark:border-primary-500/20">
        <Icon name="lucide:check" class="size-4 text-muted-900 dark:text-white" />
      </span>
      <span class="font-sans text-sm text-muted-900 dark:text-muted-100">{{ item }}</span>
    </li>
  </ul>
</template>
