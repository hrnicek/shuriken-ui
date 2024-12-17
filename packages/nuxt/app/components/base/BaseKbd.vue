<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface BaseKbdProps extends PrimitiveProps {
  /**
   * The variant of the kbd.
   *
   * @default 'default'
   */
  variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'custom'

  /**
   * The size of the kbd.
   *
   * @default 'sm'
   */
  size?: 'sm' | 'md' | 'lg'
}
export type BaseKbdSlots = {
  default(): any
}

export const sizes = {
  sm: 'min-h-[18px] px-1 text-xs',
  md: 'min-h-[30px] py-1 px-1.5 text-sm',
  lg: 'min-h-[42px] py-1.5 px-2 text-lg',
} as const

export const variants = {
  'default-low': 'bg-white border border-muted-200 text-muted-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-muted-700 dark:border-muted-600 dark:text-muted-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)]',
  'default-high': 'bg-white border border-muted-200 text-muted-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-muted-900 dark:border-muted-700 dark:text-muted-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)]',
  'muted-low': 'bg-muted-200 border border-transparent text-muted-800 dark:bg-muted-700 dark:text-muted-200',
  'muted-high': 'bg-muted-200 border border-transparent text-muted-800 dark:bg-muted-900 dark:text-muted-200',
  'custom': '',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseKbdProps>(), {
  as: 'kbd',
  variant: undefined,
  rounded: undefined,
  size: undefined,
})
const slots = defineSlots<BaseKbdSlots>()

const variant = useNuiDefaultProperty(props, 'BaseKbd', 'variant')
const size = useNuiDefaultProperty(props, 'BaseKbd', 'size')
const forward = useForwardProps(reactiveOmit(props, ['variant', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="font-mono inline-flex justify-center items-center rounded-md"
    :class="[
      variant && variants[variant],
      size && sizes[size],
    ]"
  >
    <slot />
  </Primitive>
</template>
