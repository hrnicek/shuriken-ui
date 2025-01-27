<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to?: RouteLocationRaw
  title?: string
  prefix?: string
  content?: string
  end?: string
  icon?: string
  search?: string
  navigation?: any[]
}>()
// const markedTitle = useNuiMark(
//   () => props.title,
//   () => props.search,
//   'text-muted-950 dark:text-muted-100 group-focus:text-primary-500 underline decoration-muted-500/40 group-focus:decoration-primary-500/40 group-hover:decoration-primary-500/40 group-hover:text-primary-500 dark:group-focus:text-primary-400 dark:group-hover:text-primary-400 bg-transparent',
// )
// const markedSubtitle = useNuiMark(
//   () => props.subtitle,
//   () => props.search,
//   'text-muted-950 dark:text-muted-100 bg-transparent underline decoration-muted-500/30',
// )
// const markedEnd = useNuiMark(
//   () => props.end,
//   () => props.search,
//   'text-muted-950 dark:text-muted-100 bg-transparent underline decoration-muted-500/30',
// )
</script>

<template>
  <NuxtLink
    class="focus-visible:nui-focus hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded p-3 w-full"
    :to="props.to"
  >
    <div class="flex grow flex-col">
      <span class="flex gap-1 items-center">
        <span
          v-if="props.prefix"
          class="text-muted-500 dark:text-muted-600 text-sm"
        >
          {{ props.prefix }} >
        </span>
        <span
          v-if="props.title"
          class="text-muted-700 dark:text-muted-500 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm"
        >
          {{ props.title }}
        </span>
      </span>
      <span
        v-if="props.content"
        class="text-muted-400 dark:text-muted-500 line-clamp-1 text-sm"
      >
        {{ props.content }}
      </span>
    </div>
    <div v-if="props.icon" class="shrink-0">
      <img
        :src="props.icon"
        class="size-8"
        alt=""
      >
    </div>
    <div v-if="props.end" class="shrink-0">
      <span
        v-if="props.end"
        class="text-muted-400 dark:text-muted-500 line-clamp-2 text-sm"
      >
        {{ props.end }}

      </span>
    </div>
  </NuxtLink>
</template>
