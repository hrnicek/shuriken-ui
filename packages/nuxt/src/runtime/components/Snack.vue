<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'

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
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the snack.
   */
  size?: 'xs' | 'sm' | 'md'
}
export interface BaseSnackEmits {
  delete: []
}
export interface BaseSnackSlots {
  default: () => any
  icon: () => any
}

export const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const wrapperSizes = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const spacings = {
  xs: '!ps-2',
  sm: '!ps-3',
  md: '!ps-4',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const iconSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
} as const satisfies Record<NonNullable<BaseSnackProps['size']>, string>

export const variants = {
  default: 'bg-tag-default-bg/10 text-tag-default-text ring-1 ring-inset ring-tag-default-border/20',
  muted: 'bg-tag-muted-bg/10 text-tag-muted-text ring-1 ring-inset ring-tag-muted-border/20',
  primary: 'bg-primary-light/10 text-primary-base dark:text-primary-light ring-1 ring-inset ring-primary-light/20',
  dark: 'bg-tag-dark-bg/10 text-tag-dark-text ring-1 ring-inset ring-tag-dark-border/20',
  none: '',
} as const satisfies Record<NonNullable<BaseSnackProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSnackProps>(), {
  label: '',
  icon: undefined,
  image: undefined,

  size: 'md',
  variant: 'default',
})
const emits = defineEmits<BaseSnackEmits>()
const slots = defineSlots<BaseSnackSlots>()

const iconClose = useNuiConfig('icon', 'close')

const forward = useForwardProps(reactiveOmit(props, ['size', 'variant', 'label', 'icon', 'image']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="inline-flex items-center gap-1 rounded-full outline-transparent"
    :class="[
      sizes[props.size],
      props.variant && variants[props.variant],
      props.icon || props.image ? '' : spacings[props.size],
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="-ms-0.5 flex items-center justify-center rounded-full bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-700"
      :class="[
        wrapperSizes[props.size],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" :class="iconSizes[props.size]" />
      </slot>
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="-ms-0.5 flex items-center justify-center rounded-full shrink-0"
    >
      <img :src="props.image" class="rounded-full" :class="wrapperSizes[props.size]" alt="">
    </div>
    <span
      class="font-sans"
      :class="[
        textSizes[props.size],
      ]"
    >
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="focus-visible:nui-focus cursor-pointer scale-75 flex items-center justify-center rounded-full hover:bg-current/15 dark:hover:bg-current/10 transition-colors duration-200"
      :class="[
        wrapperSizes[props.size],
      ]"
      @click="emits('delete')"
    >
      <Icon :name="iconClose" class="text-base" />
    </button>
  </Primitive>
</template>
