<script setup lang="ts">
// const { prev, next, page } = useContent()
const route = useRoute()
const { data } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('content', route.path)
}, {
  watch: [() => route.path]
})
const prev = computed(() => data.value?.at(0))
const next = computed(() => data.value?.at(1))
// const next = ref<any>()
</script>

<template>
  <div class="pb-20">
    <div class="flex items-center justify-between">
      <div class="text-start">
        <NuxtLink
          v-if="prev"
          :to="prev.path"
          class="group/link"
        >
          <div>
            <p class="text-xs font-medium uppercase text-muted-400">
              Previous Section
            </p>
            <p
              class="text-muted-600 underline-offset-4 transition-colors duration-300 group-hover/link:text-muted-900 group-hover/link:underline dark:text-muted-200 dark:group-hover/link:text-muted-100"
            >
              {{ prev.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="text-end">
        <NuxtLink
          v-if="next"
          :to="next.path"
          class="group/link"
        >
          <div>
            <p class="text-xs font-medium uppercase text-muted-400">
              Next Section
            </p>
            <p
              class="text-muted-600 underline-offset-4 transition-colors duration-300 group-hover/link:text-muted-900 group-hover/link:underline dark:text-muted-200 dark:group-hover/link:text-muted-100"
            >
              {{ next.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <hr class="my-8 border-t border-muted-200 dark:border-muted-800">
  </div>
</template>
