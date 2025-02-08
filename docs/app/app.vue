<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: title => title ? `${title} | Shuriken UI` : 'Shuriken UI - Open Source, Modern, Accessible, and Customizable UI Components',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Discover Shuriken UI, an open-source library of modern, responsive, and customizable UI components for Nuxt with Tailwind CSS V4.',
    },
  ],
})

useSeoMeta({
  ogSiteName: 'Shuriken UI',
  ogType: 'website',
  ogTitle: 'Shuriken UI - Open Source, Modern, Accessible, and Customizable UI Components',
  ogDescription: 'Discover Shuriken UI, an open-source library of modern, responsive, and customizable UI components for Nuxt with Tailwind CSS V4.',
  ogUrl: appConfig.url,
  ogImage: `/og.png?time=${Date.now()}`,
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitter,
})
</script>

<template>
  <BaseProviders :toast="{ max: 3, position: 'top-center' }">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--color-nuxt-loading-indicator)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppSearch />
  </BaseProviders>
</template>
