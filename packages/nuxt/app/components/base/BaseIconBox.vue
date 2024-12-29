<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseIconBoxProps extends PrimitiveProps {
  /**
   * The variant of the box.
   *
   * @default 'default-low'
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the icon.
   *
   * @default 'xs'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
   * The radius of the icon.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
}
export type BaseIconBoxSlots = {
  default(): any
}

export const variants = {
  'default': 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
  'muted': 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-800 border border-muted-100 dark:border-muted-800',
  'primary': 'text-primary-invert bg-primary-base',
  'dark': 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
  'none': '',
} as const

// @todo: low-contrast-variant
// const variants = {
//   'default': 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'muted': 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-700 border border-muted-100 dark:border-muted-700',
//   'primary': 'text-primary-invert bg-primary-base',
//   'dark': 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
//   'none': '',
// }

export const sizes = {
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseIconBoxProps>(), {
  variant: undefined,
  size: undefined,
  rounded: undefined,
  mask: undefined,
})
const slots = defineSlots<BaseIconBoxSlots>()

const variant = useNuiConfig('BaseIconBox', 'variant', () => props.variant)
const size = useNuiConfig('BaseIconBox', 'size', () => props.size)
const rounded = useNuiConfig('BaseIconBox', 'rounded', () => props.rounded)

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'size', 'variant']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center"
    :class="[
      variant && variants[variant],
      size && sizes[size],
      rounded && radiuses[rounded],
      rounded === 'none' && props.mask && masks[props.mask],
    ]"
  >
    <slot />
  </Primitive>
</template>
