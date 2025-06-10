<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { tm } from '../utils/tw-merge'

export interface BaseCardProps extends PrimitiveProps {
  /**
   * The variant of the card.
   */
  variant?: 'default' | 'muted' | 'none'

  /**
   * The radius of the card.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export interface BaseCardSlots {
  default: () => any
}

// Theme configuration
export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseCardProps['rounded']>, string>

export const variants = {
  default: 'border border-card-default-border bg-card-default-bg',
  muted: 'border border-card-muted-border bg-card-muted-bg',
  none: '',
} as const satisfies Record<NonNullable<BaseCardProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseCardProps>(), {
  rounded: 'sm',
  variant: 'default',
})
const slots = defineSlots<BaseCardSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'variant']))
</script>

<template>
  <Primitive
    v-bind="forward"
    :class="tm([
      props.rounded && radiuses[props.rounded],
      props.variant && variants[props.variant],
    ])"
  >
    <slot />
  </Primitive>
</template>
