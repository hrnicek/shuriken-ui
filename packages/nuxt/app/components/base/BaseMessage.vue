<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseMessageProps extends PrimitiveProps {
  /**
   * The message to display.
   */
  message?: string

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: boolean | string

  /**
   * Default icons to apply to the messages, when the icon is active.
   */
  defaultIcons?: {
    /**
     * The default icon
     */
    'default'?: string

    /**
     * The muted icon
     */
    'muted'?: string

    /**
     * The info icon
     */
    'info'?: string

    /**
     * The success icon
     */
    'success'?: string

    /**
     * The warning icon
     */
    'warning'?: string

    /**
     * The destructive icon
     */
    'destructive'?: string

    /**
     * The primary icon
     */
    'primary'?: string
  }

  /**
   * The icon to show in the close button
   */
  closeIcon?: string

  /**
   * Whether to show a close button.
   */
  closable?: boolean

  /**
   * The variant of the message.
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'destructive'

  /**
   * The radius of the message.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BaseMessageEmits {
  close: []
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const

export const variants = {
  'default': 'border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  'muted': 'border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  'primary': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
  'info': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
  'success': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
  'warning': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
  'destructive': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default': 'border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800',
//   'muted': 'border-muted-200 dark:border-muted-700 bg-muted-100 dark:bg-muted-500/10',
//   'primary': 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
//   'info': 'border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-500/10',
//   'success': 'border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-500/10',
//   'warning': 'border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-500/10',
//   'destructive': 'border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-500/10',
// } as const

export const textVariants = {
  'default': 'text-muted-500 dark:text-muted-400',
  'muted': 'text-muted-500 dark:text-muted-500',
  'primary': 'text-primary-800 dark:text-primary-200',
  'info': 'text-blue-800 dark:text-blue-200',
  'success': 'text-green-800 dark:text-green-200',
  'warning': 'text-amber-800 dark:text-amber-200',
  'destructive': 'text-red-800 dark:text-red-200',
} as const

// @todo: low-contrast-theme
// const textVariants = {
//   'default': 'text-muted-500 dark:text-muted-400',
//   'muted': 'text-muted-500 dark:text-muted-500',
//   'primary': 'text-primary-800 dark:text-primary-200',
//   'info': 'text-blue-800 dark:text-blue-200',
//   'success': 'text-green-800 dark:text-green-200',
//   'warning': 'text-amber-800 dark:text-amber-200',
//   'destructive': 'text-red-800 dark:text-red-200',
// } as const

export const iconVariants = {
  'default': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
  'muted': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
  'primary': 'text-white dark:text-white bg-[var(--primary-base)] dark:bg-[var(--primary-light)]',
  'info': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
  'success': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
  'warning': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
  'destructive': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
} as const

// @todo: low-contrast-theme
// const iconVariants = {
//   'default': 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
//   'muted': 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
//   'primary': 'text-white dark:text-white bg-primary-500 dark:bg-primary-500',
//   'info': 'text-white dark:text-white bg-blue-500 dark:bg-blue-500',
//   'success': 'text-white dark:text-white bg-green-500 dark:bg-green-500',
//   'warning': 'text-white dark:text-white bg-amber-500 dark:bg-amber-500',
//   'destructive': 'text-white dark:text-white bg-red-500 dark:bg-red-500',
// } as const

export const closeVariants = {
  'default': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'muted': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  'primary': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
  'info': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
  'success': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
  'warning': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
  'destructive': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
} as const

// @todo: low-contrast-theme
// const closeVariants = {
//   'default': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
//   'muted': 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
//   'primary': 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
//   'info': 'text-blue-500 dark:text-blue-500 hover:enabled:bg-blue-300/50 dark:hover:enabled:bg-blue-500/30 focus-visible:bg-blue-300/50 dark:focus-visible:bg-blue-500/30 active:enabled:bg-blue-300/20 dark:active:enabled:bg-blue-500/20',
//   'success': 'text-green-500 dark:text-green-500 hover:enabled:bg-green-300/50 dark:hover:enabled:bg-green-500/30 focus-visible:bg-green-300/50 dark:focus-visible:bg-green-500/30 active:enabled:bg-green-300/20 dark:active:enabled:bg-green-500/20',
//   'warning': 'text-amber-500 dark:text-amber-500 hover:enabled:bg-amber-300/50 dark:hover:enabled:bg-amber-500/30 focus-visible:bg-amber-300/50 dark:focus-visible:bg-amber-500/30 active:enabled:bg-amber-300/20 dark:active:enabled:bg-amber-500/20',
//   'destructive': 'text-red-500 dark:text-red-500 hover:enabled:bg-red-300/50 dark:hover:enabled:bg-red-500/30 focus-visible:bg-red-300/50 dark:focus-visible:bg-red-500/30 active:enabled:bg-red-300/20 dark:active:enabled:bg-red-500/20',
// } as const
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseMessageProps>(), {
  variant: undefined,
  rounded: undefined,
  message: '',
  icon: false,
  closeIcon: undefined,
  defaultIcons: undefined,
})
const emits = defineEmits<BaseMessageEmits>()

const variant = useNuiConfig('BaseMessage', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseMessage', 'rounded', () => props.rounded)
const icons = useNuiConfig('BaseMessage', 'defaultIcons', () => props.defaultIcons)

const iconClose = useNuiConfig('icon', 'close', () => props.closeIcon)

const icon = computed(() =>
  typeof props.icon === 'string'
    ? props.icon
    : variant.value && icons.value
      ? icons.value[variant.value]
      : '',
)
</script>

<template>
  <div
    class="relative flex gap-2 border"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      props.icon ? 'py-1 ps-1 pe-6' : 'py-2 ps-2 pe-6',
    ]"
  >
    <div
      v-if="props.icon && icon"
      class="flex size-10 shrink-0 items-center justify-center"
      :class="[
        icon && iconVariants[variant],
        rounded && radiuses[rounded],
      ]"
    >
      <slot name="icon" icon-name="icon">
        <Icon v-if="icon" :name="icon" class="text-lg text-white dark:text-white" />
      </slot>
    </div>
    <span class="inline-flex items-center leading-normal font-sans text-sm" :class="[
      variant && textVariants[variant],
    ]">
      <slot>{{ props.message }}</slot>
    </span>
    <div v-if="props.closable" class="absolute top-[-0.5rem] end-[-0.5rem] flex items-center justify-center bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-full size-8">
      <button
        type="button"
        tabindex="0"
        class="nui-focus flex cursor-pointer items-center justify-center shrink-0 size-6 rounded-full transition-colors duration-200"
        :class="[
          icon && closeVariants[variant],
        ]"
        @click="emits('close')"
      >
        <slot name="close-button">
          <Icon :name="iconClose" class="text-base" />
        </slot>
      </button>
    </div>
  </div>
</template>
