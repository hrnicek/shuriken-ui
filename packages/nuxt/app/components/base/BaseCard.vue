<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Adds a static or a hover shadow to the card.
     */
    shadow?: 'static' | 'hover'

    /**
     * The variant of the card.
     *
     * @default 'default'
     */
     variant?:
      | 'default-low'
      | 'default-high'
      | 'muted-low'
      | 'muted-high'
      | 'custom'

    /**
     * The radius of the card.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: undefined,
    shadow: undefined,
    variant: undefined,
  },
)

const variant = useNuiDefaultProperty(props, 'BaseCard', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseCard', 'rounded')

const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
}

const variants = {
  'default-low': 'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
  'default-high': 'border border-muted-300 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted-low': 'border border-muted-200 dark:border-muted-700 bg-muted-100 dark:bg-muted-800',
  'muted-high': 'border border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'custom': '',
}

const shadows = {
  static: 'shadow-muted-300/30 dark:shadow-muted-800/30 shadow-xl',
  hover: 'hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl',
}

const classes = computed(() => [
  'relative w-full transition-all duration-300',
  rounded.value && radiuses[rounded.value],
  variant.value && variants[variant.value],
  props.shadow && shadows[props.shadow],
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
