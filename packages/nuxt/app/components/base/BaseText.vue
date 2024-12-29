<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface BaseTextProps extends PrimitiveProps {
  /**
   * The size of the text.
   *
   * @default 'md'
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
   *
   * @default 'normal'
   */
  lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

  /**
   * The weight of the text.
   *
   * @default 'normal'
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

  /**
   * The letter spacing of the paragraph.
   *
   * @default 'normal'
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
}
export type BaseTextSlots = {
  default(): any
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
} as const

export const leads = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
} as const

export  const weights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const

export const trackings = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTextProps>(), {
  as: 'span',
  size: undefined,
  lead: undefined,
  weight: undefined,
  tracking: undefined,
})
const slots = defineSlots<BaseTextSlots>()

const size = useNuiConfig('BaseText', 'size', () => props.size)
const lead = useNuiConfig('BaseText', 'lead', () => props.lead)
const weight = useNuiConfig('BaseText', 'weight', () => props.weight)
const tracking = useNuiConfig('BaseText', 'tracking', () => props.tracking)
const forward = useForwardProps(reactiveOmit(props, ['size', 'lead', 'weight', 'tracking']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="font-sans"
    :class="[
      size && sizes[size],
      lead && leads[lead],
      weight && weights[weight],
      tracking && trackings[tracking],
    ]"
  >
    <slot />
  </Primitive>
</template>
