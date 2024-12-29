<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseIconBoxProps extends PrimitiveProps {
  /**
   * The variant of the box.
   *
   * @default 'default-low'
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the icon.
   *
   * @default 'xs'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
   * The radius of the icon.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
}

export const variants = {
  'default': 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700',
  'muted': 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-800 border border-muted-100 dark:border-muted-800',
  'primary': 'text-primary-invert bg-primary-base',
  'dark': 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
  'none': '',
} as const

// @todo: low-contrast-variant
// const variants = {
//   'default': 'text-muted-600 dark:text-muted-200 bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'muted': 'text-muted-600 dark:text-muted-200 bg-muted-100 dark:bg-muted-700 border border-muted-100 dark:border-muted-700',
//   'primary': 'text-primary-invert bg-primary-base',
//   'dark': 'text-white bg-muted-900 dark:bg-white dark:text-muted-900',
//   'none': '',
// }

export const sizes = {
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
} as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseIconBoxProps>(), {
  variant: undefined,
  size: undefined,
  rounded: undefined,
  mask: undefined,
})

const variant = useNuiConfig('BaseIconBox', 'variant', () => props.variant)
const size = useNuiConfig('BaseIconBox', 'size', () => props.size)
const rounded = useNuiConfig('BaseIconBox', 'rounded', () => props.rounded)

const forward = useForwardProps(reactiveOmit(props, ['rounded', 'size', 'variant']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center"
    :class="[
      variant && variants[variant],
      size && sizes[size],
      rounded && radiuses[rounded],
      rounded === 'none' && props.mask && masks[props.mask],
    ]"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.nui-mask {
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.nui-mask-hex {
  mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuNzg2IDE4MS40Yy05LjE5NiAwLTIwLjA2My02LjY4Ny0yNS4wNzktMTQuMjFMMy43NjIgMTA1LjMzYy01LjAxNi04LjM2LTUuMDE2LTIwLjkgMC0yOS4yNTlsMzUuOTQ1LTYxLjg2QzQ0LjcyMyA1Ljg1MSA1NS41OSAwIDY0Ljc4NiAwaDcxLjA1NWM5LjE5NiAwIDIwLjA2MyA2LjY4OCAyNS4wNzkgMTQuMjExbDM1Ljk0NSA2MS44NmM0LjE4IDguMzYgNC4xOCAyMC44OTkgMCAyOS4yNThsLTM1Ljk0NSA2MS44NmMtNC4xOCA4LjM2LTE1Ljg4MyAxNC4yMTEtMjUuMDc5IDE0LjIxMUg2NC43ODZ6Ii8+PC9zdmc+');
}

.nui-mask-hexed {
  mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=');
}

.nui-mask-deca {
  mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTYgMGw1OC43NzkgMTkuMDk4IDM2LjMyNyA1MHY2MS44MDRsLTM2LjMyNyA1MEw5NiAyMDBsLTU4Ljc3OS0xOS4wOTgtMzYuMzI3LTUwVjY5LjA5OGwzNi4zMjctNTB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=');
}

.nui-mask-blob {
  mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==');
}

.nui-mask-diamond {
  mask-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBsMTAwIDEwMC0xMDAgMTAwTDAgMTAweiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
}
</style>