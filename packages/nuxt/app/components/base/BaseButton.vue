<script lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export interface BaseButtonProps {
  /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
  to?: RouteLocationRaw

  /** Using href instead of to result in a native anchor with no router functionality. */
  href?: string

  /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
  rel?: string

  /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
  target?: string

  /** The type of the button. */
  type?: 'button' | 'submit' | 'reset'

  /** Whether the button is in a loading state. */
  loading?: boolean

  /**
   * The variant of the button..
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'ghost' | 'muted' | 'primary' | 'destructive' | 'dark' | 'link' | 'none'

  /**
   * The size of the button
   *
   * @default 'md'
   */
  size?: 'sm' | 'icon-sm' | 'md' | 'icon-md' | 'lg' | 'icon-lg' | 'xl' | 'icon-xl'

  /**
   * The radius of the button.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export const sizes = {
  'sm': 'h-8 px-3 py-1 text-sm',
  'md': 'h-10 px-4 py-2 text-sm',
  'lg': 'h-12 px-6 py-2 text-base',
  'xl': 'h-14 px-10 py-4 text-base',
  'icon-sm': 'size-8 text-sm',
  'icon-md': 'size-10 text-sm',
  'icon-lg': 'size-12 text-base',
  'icon-xl': 'size-14 text-base',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const

export const variants = {
  'default': 'border border-muted-300 dark:border-muted-800 hover:enabled:border-muted-200 dark:hover:enabled:border-muted-700 text-muted-800 dark:text-muted-100 bg-white dark:bg-muted-950 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-900 active:enabled:bg-white dark:active:enabled:bg-muted-950 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-900',
  'muted': 'border border-muted-100 dark:border-muted-800 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-800 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-700 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-600 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-700',
  'ghost': 'text-muted-600 dark:text-muted-100 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-800',
  'primary': 'text-[var(--primary-invert)] dark:text-[var(--primary-invert)] bg-[var(--primary-base)] dark:bg-[var(--primary-base)] hover:enabled:bg-[var(--primary-light)] dark:hover:enabled:bg-[var(--primary-light)] active:enabled:bg-[var(--primary-base)] dark:active:enabled:bg-[var(--primary-base)] focus-visible:bg-[var(--primary-light)] dark:focus-visible:bg-[var(--primary-light)]',
  'destructive': 'text-[var(--destructive-invert)] dark:text-[var(--destructive-invert)] bg-[var(--destructive-base)] dark:bg-[var(--destructive-base)] hover:enabled:bg-[var(--destructive-light)] dark:hover:enabled:bg-[var(--destructive-light)] active:enabled:bg-[var(--destructive-base)] dark:active:enabled:bg-[var(--destructive-base)] focus-visible:bg-[var(--destructive-light)] dark:focus-visible:bg-[var(--destructive-light)]',
  'dark': 'text-muted-100 dark:text-muted-900 bg-muted-900 dark:bg-muted-100 hover:enabled:bg-muted-700 dark:hover:enabled:bg-muted-100 active:enabled:bg-muted-900 dark:active:enabled:bg-muted-50 focus-visible:bg-muted-800 dark:focus-visible:bg-muted-50 border border-muted-900 dark:border-muted-100 border-muted-800 dark:border-muted-50',
  'link': 'text-muted-600 dark:text-muted-100 hover:text-primary-500 dark:hover:text-primary-500 focus-visible:text-primary-500 dark:focus-visible:text-primary-500 hover:underline underline-offset-4',
  'none': '',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default-low': 'border border-muted-300 dark:border-muted-600 hover:enabled:border-muted-200 dark:hover:enabled:border-muted-500 text-muted-700 dark:text-muted-100 bg-white dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-white dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600 ',
//   'muted-low': 'border border-muted-100 dark:border-muted-700 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600',
//   'ghost-low': 'text-muted-600 dark:text-muted-100 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-700 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-600 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-600',
//   'primary': 'text-[var(--primary-invert)] dark:text-[var(--primary-invert)] bg-[var(--primary-base)] dark:bg-[var(--primary-base)] hover:enabled:bg-[var(--primary-light)] dark:hover:enabled:bg-[var(--primary-light)] active:enabled:bg-[var(--primary-base)] dark:active:enabled:bg-[var(--primary-base)] focus-visible:bg-[var(--primary-light)] dark:focus-visible:bg-[var(--primary-light)]',
//   'destructive': 'text-[var(--destructive-invert)] dark:text-[var(--destructive-invert)] bg-[var(--destructive-base)] dark:bg-[var(--destructive-base)] hover:enabled:bg-[var(--destructive-light)] dark:hover:enabled:bg-[var(--destructive-light)] active:enabled:bg-[var(--destructive-base)] dark:active:enabled:bg-[var(--destructive-base)] focus-visible:bg-[var(--destructive-light)] dark:focus-visible:bg-[var(--destructive-light)]',
//   'dark': 'text-muted-100 dark:text-muted-900 bg-muted-900 dark:bg-muted-100 hover:enabled:bg-muted-700 dark:hover:enabled:bg-muted-100 active:enabled:bg-muted-900 dark:active:enabled:bg-muted-50 focus-visible:bg-muted-800 dark:focus-visible:bg-muted-50 border border-muted-900 dark:border-muted-100 border-muted-800 dark:border-muted-50',
//   'link': 'text-muted-600 dark:text-muted-100 hover:text-primary-500 dark:hover:text-primary-500 focus-visible:text-primary-500 dark:focus-visible:text-primary-500 hover:underline underline-offset-4',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseButtonProps>(), {
  to: undefined,
  href: undefined,
  rel: '',
  target: '',
  type: undefined,
  variant: undefined,
  size: undefined,
  rounded: undefined,
})

const variant = useNuiConfig('BaseButton', 'variant', () => props.variant)
const size = useNuiConfig('BaseButton', 'size', () => props.size)
const rounded = useNuiConfig('BaseButton', 'rounded', () => props.rounded)

const classes = computed(() => [
  'relative inline-flex justify-center items-center space-x-1 font-sans font-normal leading-5 no-underline transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none',
  props.loading && '',
  variant.value && variants[variant.value],
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <span v-if="loading" class="me-2 flex justify-center items-center size-4 shrink-0">
      <Icon name="nui-icon:spiner-bold" class="text-base text-current" />
    </span>
    <slot />
  </component>
</template>
