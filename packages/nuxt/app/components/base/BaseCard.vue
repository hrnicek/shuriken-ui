<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseCardProps extends PrimitiveProps {
  /**
   * Adds a static or a hover shadow to the card.
   */
  shadow?: 'static' | 'hover'

  /**
   * The variant of the card.
   *
   * @default 'default'
   */
    variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the card.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const

export const variants = {
  'default': 'border border-muted-300 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted': 'border border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'none': '',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
//   'muted': 'border border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
//   'none': '',
// }

export const shadows = {
  static: 'shadow-muted-300/30 dark:shadow-muted-800/30 shadow-xl',
  hover: 'hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl',
} as const
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseCardProps>(), {
  rounded: undefined,
  shadow: undefined,
  variant: undefined,
})

const variant = useNuiConfig('BaseCard', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseCard', 'rounded', () => props.rounded)

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'shadow', 'variant']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="w-full"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      props.shadow && shadows[props.shadow],
    ]"
  >
    <slot />
  </Primitive>
</template>
