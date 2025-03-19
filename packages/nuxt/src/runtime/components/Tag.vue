<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'

export interface BaseTagProps extends PrimitiveProps {
  /**
   * The variant of the tag.
   */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'none'

  /**
   * The size of the tag.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The radius of the tag.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export interface BaseTagSlots {
  default: () => any
}

export const variants = {
  default: 'bg-tag-default-bg/10 text-tag-default-text ring-1 ring-inset ring-tag-default-border/20',
  muted: 'bg-tag-muted-bg/10 text-tag-muted-text ring-1 ring-inset ring-tag-muted-border/20',
  primary: 'bg-primary-light/10 text-primary-base dark:text-primary-light ring-1 ring-inset ring-primary-light/20',
  dark: 'bg-tag-dark-bg/10 text-tag-dark-text ring-1 ring-inset ring-tag-dark-border/20',
  none: '',
} as const satisfies Record<NonNullable<BaseTagProps['variant']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseTagProps['rounded']>, string>

export const sizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-1.5',
  lg: 'px-3.5 py-2',
} as const satisfies Record<NonNullable<BaseTagProps['size']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTagProps>(), {
  as: 'span',
  variant: 'default',
  rounded: 'full',
  size: 'sm',
})
const slots = defineSlots<BaseTagSlots>()

const forward = useForwardProps(reactiveOmit(props, ['variant', 'rounded', 'size']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="flex-none text-xs font-medium"
    :class="[
      props.size && sizes[props.size],
      props.rounded && radiuses[props.rounded],
      props.variant && variants[props.variant],
    ]"
  >
    <slot />
  </Primitive>
</template>
