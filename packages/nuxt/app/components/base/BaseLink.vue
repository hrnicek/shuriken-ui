<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

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
    class="underline-offset-4 hover:underline focus:underline hover:text-primary-base dark:hover:text-primary-base focus:text-primary-base dark:focus:text-primary-base" 
  >
    <slot />
  </component>
</template>
