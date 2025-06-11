<script setup lang="ts">
import type { InertiaLinkProps } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'

const props = withDefaults(defineProps<InertiaLinkProps>(), {
  href: undefined,
})
</script>

<template>
  <component
    :is="Link"
    v-bind="props"
    class="underline-offset-4 hover:underline focus:underline hover:text-link dark:hover:text-link focus:text-link dark:focus:text-link"
  >
    <slot />
  </component>
</template>
