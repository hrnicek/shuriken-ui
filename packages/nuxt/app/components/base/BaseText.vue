<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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
  }>(),
  {
    size: undefined,
    lead: undefined,
    weight: undefined,
    tracking: undefined,
  },
)

const size = useNuiDefaultProperty(props, 'BaseText', 'size')
const lead = useNuiDefaultProperty(props, 'BaseText', 'lead')
const weight = useNuiDefaultProperty(props, 'BaseText', 'weight')
const tracking = useNuiDefaultProperty(props, 'BaseText', 'tracking')

const sizes = {
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
}

const leads = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
}

const weights = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

const trackings = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
}

const classes = computed(() => [
  'font-sans',
  size.value && sizes[size.value],
  lead.value && leads[lead.value],
  weight.value && weights[weight.value],
  tracking.value && trackings[tracking.value],
])
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
