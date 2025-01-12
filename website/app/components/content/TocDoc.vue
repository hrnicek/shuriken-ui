<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const links = computed(() => page.value?.body?.toc?.links || [])
</script>

<template>
  <div class="hidden md:landscape:block lg:block">
    <div class="h-full">
      <div class="sticky top-40 h-96">
        <div class="py-3 pe-4 rounded-md min-w-[200px]">
          <BaseHeading
            as="h2" size="sm" weight="medium"
            class="pb-4"
          >
            On This Page
          </BaseHeading>
          <ul class="space-y-3">
            <li v-for="link in links" :key="link.id" class="relative">
              <NuxtLink
                :to="`#${link.id}`"
                class="block text-sm leading-snug hover:underline underline-offset-4 hover:text-primary-500 dark:hover:text-primary-500 font-sans text-muted-600 dark:text-muted-400"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>