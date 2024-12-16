<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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

    
  }>(),
  {
    variant: undefined,
    color: undefined,
    rounded: undefined,
    size: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseTag', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseTag', 'size')
const variant = useNuiDefaultProperty(props, 'BaseTag', 'variant')

const variants = {
  'default-low': 'bg-white/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/30 dark:ring-muted-200/20',
  'default-high': 'bg-white/10 dark:bg-muted-950/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'muted-low': 'bg-muted-400/10 dark:bg-muted-200/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'muted-high': 'bg-muted-400/10 dark:bg-muted-950/10 text-muted-400 dark:text-muted-200 ring-1 ring-inset ring-muted-400/20 dark:ring-muted-200/20',
  'primary': 'bg-primary-400/10 text-primary-400 ring-1 ring-inset ring-primary-400/20',
  'custom': ''
}

const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-3.5 py-2',
}

const classes = computed(() => [
  'flex-none text-xs font-medium',
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
  variant.value && variants[variant.value],
])
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
