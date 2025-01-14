<script setup lang="ts">
const links = [
  { title: 'UI Widgets', to: '/' },
  { title: 'Dashboard', to: '/examples/dashboard' },
  { title: 'Messaging', to: '/examples/messaging' },
  { title: 'Kanban', to: '/examples/kanban' },
  { title: 'Settings', to: '/examples/forms' },
  { title: 'Music', to: '/examples/music' },
]

const { isMobileOpen } = createLayoutDefaultContext()
</script>

<template>
  <div class="bg-white dark:bg-black">
    <SiteNavbarMobile />
    <div :class="isMobileOpen ? 'bg-black lg:bg-white dark:lg:bg-black' : 'bg-white dark:bg-black'">
      <div
        class="transition-all duration-300"
        :class="isMobileOpen ? 'content-transform' : ''"
      >
        <SiteNavbar />
        <div class="bg-white dark:bg-black relative w-full px-4 md:px-6 min-h-screen">
          <svg
            class="absolute inset-x-0 top-0 z-0 h-[64rem] w-full stroke-muted-200 dark:stroke-muted-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M.5 200V.5H200"
                  fill="none"
                />
              </pattern>
            </defs>
            <svg
              x="50%"
              y="-1"
              class="overflow-visible fill-muted-50 dark:fill-muted-800/80"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div class="relative z-10 mx-auto max-w-[1536px]">
            <div class="pb-24 pt-10">
              <!-- Title -->
              <div class="mt-8">
                <BaseHeading
                  as="h1"
                  weight="medium"
                  lead="tight"
                  size="4xl"
                  class="max-w-lg mb-3 text-muted-900 dark:text-white"
                >
                  Beautiful, Responsive UI Components
                </BaseHeading>
                <BaseParagraph
                  size="lg"
                  class="max-w-lg text-muted-700 dark:text-muted-300"
                >
                  Shuriken UI is a modern, responsive, and customizable component library for Nuxt and Vue.
                </BaseParagraph>
                <div class="flex items-center gap-3 mt-4">
                  <BaseButton
                    rounded="md"
                    variant="dark"
                    class="w-full md:w-32"
                  >
                    Components
                  </BaseButton>
                  <BaseButton
                    rounded="md"
                    variant="ghost"
                    class="w-full md:w-auto"
                  >
                    Browse Charts
                  </BaseButton>
                </div>
              </div>
              <!-- Content -->
              <div class="mt-12 overflow-hidden">
                <div class="flex items-center gap-x-3 py-4 mb-6 overflow-x-auto">
                  <NuxtLink
                    v-for="link in links"
                    :key="link.title"
                    :to="link.to"
                    class="whitespace-nowrap inline-flex items-center justify-center text-center text-sm text-muted-500 dark:text-muted-400 hover:text-muted-700 dark:hover:text-muted-200 font-sans py-1.5 px-3 rounded-full"
                    exact-active-class="bg-muted-100 text-muted-900! dark:bg-muted-800 dark:text-white!"
                  >
                    {{ link.title }}
                  </NuxtLink>
                </div>
                <div>
                  <slot />
                </div>
              </div>
            </div>
            <SiteBottom />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
