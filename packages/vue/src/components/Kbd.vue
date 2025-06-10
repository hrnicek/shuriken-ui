<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'

export interface BaseKbdProps extends PrimitiveProps {
  /**
   * The variant of the kbd.
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The size of the kbd.
   */
  size?: 'sm' | 'md' | 'lg'
}
export interface BaseKbdSlots {
  default: () => any
}

export const sizes = {
  sm: 'min-h-[18px] px-1 text-xs',
  md: 'min-h-[30px] py-1 px-1.5 text-sm',
  lg: 'min-h-[42px] py-1.5 px-2 text-lg',
} as const satisfies Record<NonNullable<BaseKbdProps['size']>, string>

export const variants = {
  default: 'bg-white border border-muted-200 text-muted-800 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-muted-900 dark:border-muted-700 dark:text-muted-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)]',
  muted: 'bg-muted-200 border border-transparent text-muted-800 dark:bg-muted-900 dark:text-muted-200',
  none: '',
} as const satisfies Record<NonNullable<BaseKbdProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseKbdProps>(), {
  as: 'kbd',
  variant: 'default',
  size: 'md',
})
const slots = defineSlots<BaseKbdSlots>()

const forward = useForwardProps(reactiveOmit(props, ['variant', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="font-mono inline-flex justify-center items-center rounded-md"
    :class="[
      props.variant && variants[props.variant],
      props.size && sizes[props.size],
    ]"
  >
    <slot />
  </Primitive>
</template>
