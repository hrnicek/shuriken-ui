<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'

export interface BaseIconBoxProps extends PrimitiveProps {
  /**
   * The variant of the box.
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the icon.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  /**
   * The radius of the icon.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
}
export interface BaseIconBoxSlots {
  default: () => any
}

export const variants = {
  default: 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
  muted: 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-800 border border-muted-100 dark:border-muted-800',
  primary: 'text-primary-invert bg-primary-base',
  dark: 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
  none: '',
} as const satisfies Record<NonNullable<BaseIconBoxProps['variant']>, string>

export const sizes = {
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
} as const satisfies Record<NonNullable<BaseIconBoxProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseIconBoxProps['rounded']>, string>

export const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
} as const satisfies Record<NonNullable<BaseIconBoxProps['mask']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseIconBoxProps>(), {
  mask: undefined,

  variant: 'default',
  size: 'xs',
  rounded: 'sm',
})
const slots = defineSlots<BaseIconBoxSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'size', 'variant', 'mask']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center"
    :class="[
      props.variant && variants[props.variant],
      props.size && sizes[props.size],
      props.rounded && radiuses[props.rounded],
      props.rounded === 'none' && props.mask && masks[props.mask],
    ]"
  >
    <slot />
  </Primitive>
</template>
