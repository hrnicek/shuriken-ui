<script setup lang="ts">
const route = useRoute()
const { x, y } = useWindowScroll()

const data = ref<any[]>([
  {
    path: '/blog/nuxt',
    section_title: 'Nuxt',
    section_icon: 'simple-icons:nuxtdotjs',
  },
  {
    path: '/blog/react',
    section_title: 'React',
    section_icon: 'akar-icons:react-fill',
  },
  {
    path: '/blog/tailwind',
    section_title: 'Tailwind',
    section_icon: 'simple-icons:tailwindcss',
  },
])

// Fetch tabs
// const { data } = await useAsyncData('changelog', () =>
//   queryCollection('content')
//     .select('section_title', 'section_icon', 'path')
//     .where('path', 'LIKE', '/blog/%')
//     .limit(10)
//     .all(),
// )
</script>

<template>
  <div class="bg-white dark:bg-muted-900">
    <Navbar />
    <div
      class="fixed start-0 top-16 z-[39] w-full border-b px-4 transition-all duration-300"
      :class="[y > 60 ? '!border-muted-200 bg-white/95 dark:!border-muted-800 dark:bg-muted-950' : 'border-transparent']"
    >
      <div class="mx-auto w-full max-w-7xl">
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="tab in data"
            :key="tab.path"
            :to="tab.path"
            class="flex h-14 items-center gap-2 border-b-2 text-sm"
            :class="[
              route?.path?.startsWith(tab?.path ?? '') ? ' border-muted-800 font-medium text-muted-800 opacity-100 dark:border-muted-100 dark:text-muted-100' : 'border-transparent opacity-50 grayscale',
            ]"
          >
            <Icon v-if="tab?.section_icon" :name="tab?.section_icon" class="h-5 w-5" />
            <span class="hidden text-sm font-medium text-muted-800 dark:text-muted-100 md:inline">{{ tab?.section_title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative min-h-screen px-4 pb-16 pt-32">
      <div class="mx-auto w-full max-w-7xl">
        <slot />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
