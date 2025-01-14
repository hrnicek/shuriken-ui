<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
}, {
  watch: [() => route.path],
})

const links = computed(() => page.value?.body?.toc?.links || [])
</script>

<template>
  <div class="hidden md:landscape:block lg:block">
    <div class="h-full">
      <div class="relative">
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
                class="block text-sm leading-snug hover:underline underline-offset-4 hover:text-muted-900 dark:hover:text-white font-sans text-muted-600 dark:text-muted-400"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6">
        <BaseCard rounded="lg" class="w-64 shadow-sm shadow-muted-200 dark:shadow-muted-800 p-4">
          <BaseHeading weight="medium">Hire us for your project on digisquad.io</BaseHeading>
          <BaseParagraph size="sm" class="mt-2 text-muted-600 dark:text-muted-400">
            We are a professional development team. Schedule a call with us to discuss your project requirements.
          </BaseParagraph>
          <BaseButton
            href="https://digisquad.io"
            target="_blank"
            variant="dark"
            rounded="md"
            class="w-full mt-4 font-medium">
            Schedule a call
          </BaseButton>
        </BaseCard>
      </div>
    </div>
  </div>
</template>