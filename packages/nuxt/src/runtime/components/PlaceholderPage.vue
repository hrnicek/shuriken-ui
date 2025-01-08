<script setup lang="ts">
import type { BasePlaceholderPageProps, BasePlaceholderPageSlots } from '../types';
import { BasePlaceholderPage as theme } from '#build/shuriken-ui/theme';
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BasePlaceholderPageProps>(), {
  subtitle: undefined,
  imageSize: theme.defaults.imageSize,
})
const slots = defineSlots<BasePlaceholderPageSlots>()

const forward = useForwardProps(reactiveOmit(props, ['title', 'subtitle', 'imageSize']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="flex mx-auto min-h-[400px] items-center justify-center"
    :class="[props.imageSize && theme.sizes[props.imageSize]]"
  >
    <div class="mx-auto w-full text-center">
      <div
        v-if="'image' in $slots"
        class="mx-auto block"
      >
        <slot name="image" />
      </div>
      <div class="mx-auto max-w-sm">
        <h4
          class="font-heading font-medium text-lg text-muted-900 dark:text-white mb-1 mt-4"
        >
          {{ props.title }}
        </h4>
        <p
          v-if="props.subtitle"
          class="text-sm text-muted-600 dark:text-muted-400 mb-4"
        >
          {{ props.subtitle }}
        </p>
        <slot />
      </div>
    </div>
  </Primitive>
</template>
