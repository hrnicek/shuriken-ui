<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: title => title ? `${title} | Shuriken UI` : 'Shuriken UI',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})

useSeoMeta({
  ogSiteName: 'Shuriken UI',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitter,
})
</script>

<template>
  <BaseProviders>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--color-nuxt-loading-indicator)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </BaseProviders>
</template>
