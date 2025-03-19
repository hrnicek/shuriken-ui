<script lang="ts">
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'
import { tm } from '../utils/tw-merge'

export interface BaseAvatarProps extends AvatarRootProps {
  /**
   * The URL of the image to display.
   */
  src?: string

  /**
   * The URL of a dark version of the image to display when the component is in dark mode.
   */
  srcDark?: string

  /**
   * The URL of a badge to display on top of the image.
   */
  badgeSrc?: string

  /**
   * The alt text of the image.
   */
  alt?: string

  /**
   * The text to display below the image.
   */
  text?: string

  /**
   * The size of the image.
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

  /**
   * The radius of the image.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    image?: AvatarImageProps
    dark?: AvatarImageProps
    fallback?: AvatarFallbackProps
  }

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    image?: string | string[]
    dark?: string | string[]
    fallback?: string | string[]
    badge?: string | string[]
  }
}

export interface BaseAvatarSlots {
  default: () => any
  badge: () => any
}

// Theme configuration
export const sizes = {
  'xxs': 'size-6',
  'xs': 'size-8',
  'sm': 'size-10',
  'md': 'size-12',
  'lg': 'size-16',
  'xl': 'size-20',
  '2xl': 'size-24',
  '3xl': 'size-28',
  '4xl': 'size-32',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const textSizes = {
  'xxs': 'text-xs',
  'xs': 'text-sm',
  'sm': 'text-sm',
  'md': 'text-sm',
  'lg': 'text-base',
  'xl': 'text-base',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
  '4xl': 'text-3xl',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const badgeSize = {
  'xxs': 'h-3 w-3',
  'xs': 'h-4 w-4',
  'sm': 'h-5 w-5',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-10 w-10',
  '4xl': 'h-12 w-12',
} as const satisfies Record<NonNullable<BaseAvatarProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseAvatarProps['rounded']>, string>

export const masks = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
} as const satisfies Record<NonNullable<BaseAvatarProps['mask']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAvatarProps>(), {
  src: undefined,
  srcDark: undefined,
  alt: undefined,
  badgeSrc: undefined,
  text: '?',
  size: 'sm',
  rounded: 'full',
  mask: undefined,
  bindings: () => ({}),
  classes: () => ({}),
})
const slots = defineSlots<BaseAvatarSlots>()

const forward = useForwardProps(reactiveOmit(props, ['src', 'srcDark', 'badgeSrc', 'text', 'size', 'rounded', 'mask', 'bindings', 'classes']))

const badgePosition = computed(() => {
  if (props.rounded === 'full') {
    return 'bottom-0 end-0'
  }
  if (props.size === '4xl') {
    return '-bottom-2 -end-2'
  }
  else if (['2xl', '3xl'].includes(props.size)) {
    return '-bottom-1.5 -end-1.5'
  }
  else if (['xs', 'sm', 'md', 'lg', 'xl'].includes(props.size)) {
    return '-bottom-1 -end-1'
  }

  return ''
})
</script>

<template>
  <AvatarRoot
    v-bind="forward"
    class="relative inline-flex shrink-0 items-center justify-center outline-none"
    :class="[
      props.size && sizes[props.size],
      props.rounded && radiuses[props.rounded],
      props.mask
        && (props.rounded === 'none' || rounded === 'none')
        && `nui-mask ${masks[props.mask]}`,
    ]"
  >
    <AvatarImage
      v-if="props.src"
      v-bind="props.bindings?.image || {}"
      :src="props.src"
      :alt="props.alt"
      :class="tm([
        'object-cover h-full max-h-full w-full max-w-full shadow-xs',
        props.rounded && radiuses[props.rounded],
        props.srcDark ? 'dark:hidden' : '',
        props.classes.image,
      ])"
    />

    <AvatarImage
      v-if="props.src && props.srcDark"
      v-bind="props.bindings?.image || {}"
      :src="props.srcDark"
      :alt="props.alt"
      :class="tm([
        'object-cover h-full max-h-full w-full max-w-full shadow-xs hidden dark:block',
        props.rounded && radiuses[props.rounded],
        props.classes.dark,
      ])"
    />

    <AvatarFallback
      v-bind="props.bindings?.fallback"
      :class="tm([
        'font-sans font-medium text-center uppercase line-clamp-1 break-all',
        textSizes[props.size],
        props.classes.fallback,
      ])"
    >
      <slot>
        {{ props.text }}
      </slot>
    </AvatarFallback>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      :class="tm([
        'absolute z-auto block overflow-hidden rounded-full bg-white dark:bg-muted-800',
        badgeSize[props.size],
        badgePosition,
        props.classes.badge,
      ])"
    >
      <slot name="badge">
        <img
          v-if="props.badgeSrc"
          :src="props.badgeSrc"
          class="relative scale-90 object-cover h-full w-full rounded-full"
          alt=""
        >
      </slot>
    </div>
  </AvatarRoot>
</template>
