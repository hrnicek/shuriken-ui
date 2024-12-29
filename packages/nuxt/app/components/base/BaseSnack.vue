<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface BaseSnackProps extends PrimitiveProps {
  /**
   * The text to display in the snackbar.
   */
  label?: string

  /**
   * An optional icon to display in the snackbar.
   */
  icon?: string

  /**
   * An optional image to display in the snackbar.
   */
  image?: string

  /**
   * The variant of snack.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted'

  /**
   * The size of the snack.
   *
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md'
}
export interface BaseSnackEmits {
  delete: []
}

const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
} as const

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
} as const

const wrapperSizes = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
} as const

const spacings = {
  xs: '!ps-2',
  sm: '!ps-3',
  md: '!ps-4',
} as const

const iconSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
} as const

const variants = {
  'default': 'bg-white dark:bg-muted-950 border border-muted-300 dark:border-muted-800',
  'muted': 'bg-muted-200 dark:bg-muted-950',
} as const

// @todo: low-contrast-variant
// const variants = {
//   'default': 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600',
//   'muted': 'bg-muted-200 dark:bg-muted-700',
// } as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseSnackProps>(), {
  size: undefined,
  variant: undefined,
  label: '',
  icon: undefined,
  image: undefined,
})
const emits = defineEmits<BaseSnackEmits>()

const variant = useNuiConfig('BaseSnack', 'variant', () => props.variant)
const size = useNuiConfig('BaseSnack', 'size', () => props.size)
const iconClose = useNuiConfig('icon', 'close')

const forward = useForwardProps(reactiveOmit(props, ['size', 'variant', 'label', 'icon', 'image']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="inline-flex items-center gap-1 rounded-full outline-transparent"
    :class="[
      size && sizes[size],
      variant && variants[variant],
      props.icon || props.image ? '' : spacings[size],
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="-ms-0.5 flex items-center justify-center rounded-full bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-700"
      :class="[
        size && wrapperSizes[size],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" :class="size && iconSizes[size]" />
      </slot>
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="-ms-0.5 flex items-center justify-center rounded-full shrink-0"
    >
      <img :src="props.image" class="rounded-full" :class="size && wrapperSizes[size]" alt="">
    </div>
    <span class="font-sans text-muted-600 dark:text-muted-300" :class="[
      size && textSizes[size],
    ]">
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="cursor-pointer scale-75 flex items-center justify-center rounded-full text-muted-600 dark:text-muted-300 hover:text-destructive-base dark:hover:text-destructive-light hover:bg-muted-50 dark:hover:bg-white/10 transition-colors duration-200"
      :class="[
        size && wrapperSizes[size],
      ]"
      @click="emits('delete')"
    >
      <Icon :name="iconClose" class="text-base" />
    </button>
  </Primitive>
</template>
