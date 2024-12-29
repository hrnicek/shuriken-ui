<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BasePlaceholderPageProps extends PrimitiveProps {
  /**
   * The title of the placeholder.
   */
  title: string

  /**
   * The subtitle of the placeholder.
   */
  subtitle?: string

  /**
   * The size of the featured image.
   *
   * @default 'xs'
   */
  imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export type BasePlaceholderPageSlots = {
  default(): any
  image(): any
}

export const sizes = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BasePlaceholderPageProps>(), {
  subtitle: undefined,
  imageSize: undefined,
})
const slots = defineSlots<BasePlaceholderPageSlots>()

const imageSize = useNuiConfig('BasePlaceholderPage', 'imageSize', () => props.imageSize)

const forward = useForwardProps(reactiveOmit(props, ['title', 'subtitle', 'imageSize']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="flex mx-auto min-h-[400px] items-center justify-center"
    :class="[imageSize && sizes[imageSize]]"
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
