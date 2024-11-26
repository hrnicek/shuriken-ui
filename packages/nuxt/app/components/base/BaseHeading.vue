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
  }>(),
  {
    as: undefined,
    size: undefined,
    weight: undefined,
    lead: undefined,
  },
)

const as = useNuiDefaultProperty(props, 'BaseHeading', 'as')
const lead = useNuiDefaultProperty(props, 'BaseHeading', 'lead')
const size = useNuiDefaultProperty(props, 'BaseHeading', 'size')
const weight = useNuiDefaultProperty(props, 'BaseHeading', 'weight')

const sizes = {
  'xs': 'nui-heading-xs',
  'sm': 'nui-heading-sm',
  'md': 'nui-heading-md',
  'lg': 'nui-heading-lg',
  'xl': 'nui-heading-xl',
  '2xl': 'nui-heading-2xl',
  '3xl': 'nui-heading-3xl',
  '4xl': 'nui-heading-4xl',
  '5xl': 'nui-heading-5xl',
  '6xl': 'nui-heading-6xl',
  '7xl': 'nui-heading-7xl',
  '8xl': 'nui-heading-8xl',
  '9xl': 'nui-heading-9xl',
}

const weights = {
  light: 'nui-heading-weight-light',
  normal: 'nui-heading-weight-normal',
  medium: 'nui-heading-weight-medium',
  semibold: 'nui-heading-weight-semibold',
  bold: 'nui-heading-weight-bold',
  extrabold: 'nui-heading-weight-extrabold',
}

const leads = {
  none: 'nui-heading-lead-none',
  tight: 'nui-heading-lead-tight',
  snug: 'nui-heading-lead-snug',
  normal: 'nui-heading-lead-normal',
  relaxed: 'nui-heading-lead-relaxed',
  loose: 'nui-heading-lead-loose',
}

const classes = computed(() => [
  'nui-heading',
  size.value && sizes[size.value],
  weight.value && weights[weight.value],
  lead.value && leads[lead.value],
])
</script>

<template>
  <component :is="props.as ? props.as : as" :class="classes">
    <slot />
  </component>
</template>
