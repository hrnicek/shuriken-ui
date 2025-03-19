<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'

export interface BaseTextProps extends PrimitiveProps {
  /**
   * The size of the text.
   */
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'

  /**
   * The lead of the text.
   */
  lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

  /**
   * The weight of the text.
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

  /**
   * The letter spacing of the paragraph.
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
}
export interface BaseTextSlots {
  default: () => any
}
export interface BaseTextConfig {
  size: NonNullable<BaseTextProps['size']>
  lead: NonNullable<BaseTextProps['lead']>
  weight: NonNullable<BaseTextProps['weight']>
  tracking: NonNullable<BaseTextProps['tracking']>
}

export const sizes = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'md': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
} as const satisfies Record<NonNullable<BaseTextProps['size']>, string>

export const leads = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
} as const satisfies Record<NonNullable<BaseTextProps['lead']>, string>

export const weights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const satisfies Record<NonNullable<BaseTextProps['weight']>, string>

export const trackings = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const satisfies Record<NonNullable<BaseTextProps['tracking']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTextProps>(), {
  as: 'span',

  size: 'md',
  lead: 'normal',
  weight: 'normal',
  tracking: 'normal',
})
const slots = defineSlots<BaseTextSlots>()

const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive
    v-bind="forward"
    :class="[
      props.size && sizes[props.size],
      props.lead && leads[props.lead],
      props.weight && weights[props.weight],
      props.tracking && trackings[props.tracking],
    ]"
  >
    <slot />
  </Primitive>
</template>
