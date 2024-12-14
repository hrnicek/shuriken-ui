<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** The color of the chip */
    color?: 'primary' | 'red'

    /** Add a pulse animation on the badge */
    pulse?: boolean
  }>(),
  {
    color: 'primary',
  },
)
</script>

<template>
  <div class="relative">
    <slot />
    <span
      class="flex absolute h-2.5 w-2.5 top-0 -end-0.5 -mt-0.5"
    >
      <span v-if="props.pulse" class="absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary-500 animate-ping" />
      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
    </span>
  </div>
</template>