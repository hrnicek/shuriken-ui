<script setup lang="ts">
import { defineNuxtLink } from '#imports'
import type { NuxtLinkProps } from 'nuxt/app';

const props = withDefaults(defineProps<NuxtLinkProps>(), {
  to: undefined,
  href: undefined,
  target: undefined,
  rel: undefined,
  prefetch: undefined,
  noPrefetch: undefined,
  activeClass: undefined,
  exactActiveClass: undefined,
  ariaCurrentValue: undefined,
})
const NuxtLink = defineNuxtLink({})
</script>

<template>
  <component 
    :is="NuxtLink" 
    v-bind="props"
    class="underline-offset-4 hover:underline focus:underline hover:text-link dark:hover:text-link focus:text-link dark:focus:text-link" 
  >
    <slot />
  </component>
</template>
