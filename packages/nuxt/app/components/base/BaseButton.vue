<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
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

    /** The button badge indicator */
    badge?: boolean

    /** Add a pulse animation on the badge */
    badgePulse?: boolean

    /** Whether the button is in a loading state. */
    loading?: boolean

    /**
     * The variant of the button..
     *
     * @since 2.0.0
     * @default 'default'
     */
    variant?: 'default-low' | 'default-high' |'muted-low' | 'muted-high' | 'ghost-low' | 'ghost-high' | 'primary' | 'destructive' | 'dark' | 'link' | 'custom'

    /**
     * The size of the button
     *
     * @default 'md'
     */
    size?: 'sm' | 'icon-sm' | 'md' | 'icon-md' | 'lg' | 'icon-lg' | 'xl' | 'icon-xl'

    /**
     * The radius of the button.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    to: undefined,
    href: undefined,
    rel: '',
    target: '',
    type: undefined,
    variant: undefined,
    size: undefined,
    rounded: undefined,
  },
)

const variant = useNuiDefaultProperty(props, 'BaseButton', 'variant')
const size = useNuiDefaultProperty(props, 'BaseButton', 'size')
const rounded = useNuiDefaultProperty(props, 'BaseButton', 'rounded')

const sizes = {
  'sm': 'h-8 px-3 py-1 text-sm',
  'md': 'h-10 px-4 py-2 text-sm',
  'lg': 'h-12 px-6 py-2 text-base',
  'xl': 'h-14 px-10 py-4 text-base',
  'icon-sm': 'size-8 text-sm',
  'icon-md': 'size-10 text-sm',
  'icon-lg': 'size-12 text-base',
  'icon-xl': 'size-14 text-base',
}

const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
}

const variants = {
  'default-low': 'border border-muted-300 dark:border-muted-600 hover:enabled:border-muted-200 dark:hover:enabled:border-muted-500 text-muted-700 dark:text-muted-100 bg-white dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-white dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600 ',
  'default-high': 'border border-muted-300 dark:border-muted-800 hover:enabled:border-muted-200 dark:hover:enabled:border-muted-700 text-muted-800 dark:text-muted-100 bg-white dark:bg-muted-950 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-900 active:enabled:bg-white dark:active:enabled:bg-muted-950 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-900',
  'muted-low': 'border border-muted-100 dark:border-muted-700 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-600 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-700 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-600',
  'muted-high': 'border border-muted-100 dark:border-muted-800 text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-800 hover:enabled:bg-muted-50 dark:hover:enabled:bg-muted-700 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-600 focus-visible:bg-muted-50 dark:focus-visible:bg-muted-700',
  'ghost-low': 'text-muted-600 dark:text-muted-100 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-700 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-600 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-600',
  'ghost-high': 'text-muted-600 dark:text-muted-100 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 focus-visible:bg-muted-100 dark:focus-visible:bg-muted-800',
  'primary': 'text-primary-invert dark:text-primary-invert bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 active:enabled:bg-primary-500 dark:active:enabled:bg-primary-500 focus-visible:bg-primary-400 dark:focus-visible:bg-primary-400',
  'destructive': 'text-white bg-red-600 dark:bg-red-600 hover:enabled:bg-red-500 dark:hover:enabled:bg-red-500 active:enabled:bg-red-600 dark:active:enabled:bg-red-600 focus-visible:bg-red-500 dark:focus-visible:bg-red-500',
  'dark': 'text-muted-100 dark:text-muted-900 bg-muted-900 dark:bg-muted-100 hover:enabled:bg-muted-700 dark:hover:enabled:bg-muted-100 active:enabled:bg-muted-900 dark:active:enabled:bg-muted-50 focus-visible:bg-muted-800 dark:focus-visible:bg-muted-50 border border-muted-900 dark:border-muted-100 border-muted-800 dark:border-muted-50',
  'link': 'text-muted-600 dark:text-muted-100 hover:text-primary-500 dark:hover:text-primary-500 focus-visible:text-primary-500 dark:focus-visible:text-primary-500 hover:underline underline-offset-4',
  'custom': '',
}

const classes = computed(() => [
  'relative inline-flex justify-center items-center space-x-1 font-sans font-normal leading-5 no-underline transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none',
  props.loading && '!text-transparent',
  variant.value && variants[variant.value],
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes" data-group-role="button">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="h-4 w-12 rounded" :class="variants[variant] === 'dark' && 'filter-invert'"/>
    <span
      v-if="props.badge"
      class="nui-button-badge"
    >
      <span v-if="props.badgePulse" class="nui-button-badge-pulse" />
      <span class="nui-button-badge-inner" />
    </span>
  </component>
</template>
