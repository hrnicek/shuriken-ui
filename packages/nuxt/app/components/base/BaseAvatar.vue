<script lang="ts">
import type {
  AvatarRootProps,
  AvatarImageProps,
  AvatarFallbackProps,
 } from 'reka-ui'

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
   *
   * @default 'sm'
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

  /**
   * The radius of the image.
   *
   * @default 'full'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
   */
  mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the inner element.
     */
    inner?: string | string[]

    /**
     * CSS classes to apply to the img element.
     */
    img?: string | string[]

    /**
     * CSS classes to apply to the badge element.
     */
    badge?: string | string[]

    /**
     * CSS classes to apply to the dot element.
     */
    dot?: string | string[]
  }

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    /**
     * Optional bindings to pass to the badge element.
     */
    image?: AvatarImageProps
    dark?: AvatarImageProps
    fallback?: AvatarFallbackProps
  }
}
export type BaseAvatarSlots = {
  default(): any
  badge(): any
}

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
} as const

export const textSizes = {
  xxs: 'text-xs',
  xs: 'text-sm',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
  '4xl': 'text-3xl',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const

export const masks = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
} as const

export const badgeSize = {
  xxs: 'h-3 w-3',
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-10 w-10',
  '4xl': 'h-12 w-12',
} as const

</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseAvatarProps>(), {
  src: undefined,
  srcDark: undefined,
  badgeSrc: undefined,
  text: '?',
  size: undefined,
  rounded: undefined,
  mask: undefined,
  classes: () => ({}),
})
const slots = defineSlots<BaseAvatarSlots>()

const attrs = useAttrs()

const rounded = useNuiDefaultProperty(props, 'BaseAvatar', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseAvatar', 'size')

const forward = useForwardProps(reactiveOmit(props, ['src', 'srcDark', 'badgeSrc', 'text', 'size', 'rounded', 'mask', 'classes', 'bindings']))

const badgePosition = computed(() => {
  if (rounded.value === 'full') {
    return 'bottom-0 end-0'
  }
  if (size.value === '4xl') {
    return '-bottom-2 -end-2'
  }
  else if (['2xl', '3xl'].includes(size.value)) {
    return '-bottom-1.5 -end-1.5'
  }
  else if (['xs', 'sm', 'md', 'lg', 'xl'].includes(size.value)) {
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
      size && sizes[size],
      rounded && radiuses[rounded],
      props.mask
        && (props.rounded === 'none' || rounded === 'none')
        && `nui-mask ${masks[props.mask]}`,
      props.classes?.wrapper,
    ]"
  >
    <div class="relative flex items-center justify-center overflow-hidden text-center h-full w-full transition-all duration-300" :class="props.classes?.inner">
      <slot>
        <AvatarImage
          v-if="props.src"
          v-bind="{
            ...attrs,
            ...(props.bindings?.image || {}),
          }"
          :src="props.src"
          class="object-cover h-full max-h-full w-full max-w-full shadow-xs"
          :class="[
            rounded && radiuses[rounded],
            props.srcDark ? 'dark:hidden' : '',
            props.classes?.img,
          ]"
        />

        <AvatarImage
          v-if="props.src && props.srcDark"
          v-bind="{
            ...attrs,
            ...(props.bindings?.dark || {}),
          }"
          :src="props.srcDark"
          class="object-cover h-full max-h-full w-full max-w-full shadow-xs hidden dark:block"
          :class="[rounded && radiuses[rounded], props.classes?.img]"
        />

        <AvatarFallback
          v-bind="props.bindings?.fallback"
          class="font-sans font-medium text-center uppercase"
          :class="[
            textSizes[size]
          ]"
        >
          {{ props.text }}
        </AvatarFallback>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="absolute z-10 block overflow-hidden rounded-full bg-white dark:bg-muted-800"
      :class="[
        props.classes?.badge,
        badgeSize[size],
        badgePosition,
      ]"
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