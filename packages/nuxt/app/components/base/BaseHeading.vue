<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The HTML tag to use (e.g. `h1`, `h2`, etc.).
     *
     * @default 'p'
     */
    as?: string

    /**
     * The size of the heading.
     *
     * @default 'xl'
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
     * The spacing below the heading.
     *
     * @default 'normal'
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

    /**
     * The weight of the heading.
     *
     * @default 'semibold'
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

    /**
     * The letter spacing of the heading.
     *
     * @default 'normal'
     */
     tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  }>(),
  {
    as: undefined,
    size: undefined,
    lead: undefined,
    weight: undefined,
    tracking: undefined,
  },
)

const as = useNuiDefaultProperty(props, 'BaseHeading', 'as')
const size = useNuiDefaultProperty(props, 'BaseHeading', 'size')
const lead = useNuiDefaultProperty(props, 'BaseHeading', 'lead')
const weight = useNuiDefaultProperty(props, 'BaseHeading', 'weight')
const tracking = useNuiDefaultProperty(props, 'BaseHeading', 'tracking')

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
  <component :is="props.as ? props.as : as" :class="classes">
    <slot />
  </component>
</template>
