<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The lead of the text.
     *
     * @default 'normal'
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

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
     * The weight of the text.
     *
     * @default 'normal'
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  }>(),
  {
    size: undefined,
    weight: undefined,
    lead: undefined,
  },
)

const lead = useNuiDefaultProperty(props, 'BaseText', 'lead')
const size = useNuiDefaultProperty(props, 'BaseText', 'size')
const weight = useNuiDefaultProperty(props, 'BaseText', 'weight')

const sizes = {
  'xs': 'nui-text-content-xs',
  'sm': 'nui-text-content-sm',
  'md': 'nui-text-content-md',
  'lg': 'nui-text-content-lg',
  'xl': 'nui-text-content-xl',
  '2xl': 'nui-text-content-2xl',
  '3xl': 'nui-text-content-3xl',
  '4xl': 'nui-text-content-4xl',
  '5xl': 'nui-text-content-5xl',
  '6xl': 'nui-text-content-6xl',
  '7xl': 'nui-text-content-7xl',
  '8xl': 'nui-text-content-8xl',
  '9xl': 'nui-text-content-9xl',
}

const weights = {
  light: 'nui-text-weight-light',
  normal: 'nui-text-weight-normal',
  medium: 'nui-text-weight-medium',
  semibold: 'nui-text-weight-semibold',
  bold: 'nui-text-weight-bold',
  extrabold: 'nui-text-weight-extrabold',
}

const leads = {
  none: 'nui-text-lead-none',
  tight: 'nui-text-lead-tight',
  snug: 'nui-text-lead-snug',
  normal: 'nui-text-lead-normal',
  relaxed: 'nui-text-lead-relaxed',
  loose: 'nui-text-lead-loose',
}

const classes = computed(() => [
  'nui-text',
  size.value && sizes[size.value],
  weight.value && weights[weight.value],
  lead.value && leads[lead.value],
])
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
