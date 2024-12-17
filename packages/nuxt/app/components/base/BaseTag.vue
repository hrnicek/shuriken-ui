<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface BaseTagProps extends PrimitiveProps {
  /**
   * The variant of the tag.
   *
   * @default 'default-low'
   */
  variant?: 'default-low' | 'default-high' | 'muted-low' | 'muted-high' | 'primary' | 'custom'

  /**
   * The size of the tag.
   *
   * @default 'sm'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the tag.
   *
   * @default 'full'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export const variants = {
  'default-low': 'bg-white/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/30 dark:ring-muted-200/20',
  'default-high': 'bg-white/10 dark:bg-muted-950/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'muted-low': 'bg-muted-400/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'muted-high': 'bg-muted-400/10 dark:bg-muted-950/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'primary': 'bg-primary-400/10 text-primary-400 ring-1 ring-inset ring-primary-400/20',
  'custom': ''
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-3.5 py-2',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTagProps>(), {
  as: 'span',
  variant: undefined,
  rounded: undefined,
  size: undefined,
})
const slots = defineSlots<{
  default(): any
}>()

const rounded = useNuiDefaultProperty(props, 'BaseTag', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseTag', 'size')
const variant = useNuiDefaultProperty(props, 'BaseTag', 'variant')

const forward = useForwardProps(reactiveOmit(props, ['variant', 'rounded', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward" 
    class="flex-none text-xs font-medium"
    :class="[
      size && sizes[size],
      rounded && radiuses[rounded],
      variant && variants[variant],
    ]"
  >
    <slot />
  </Primitive>
</template>
