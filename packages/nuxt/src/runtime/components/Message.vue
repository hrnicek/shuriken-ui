<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'

export interface BaseMessageProps extends PrimitiveProps {
  /**
   * The message to display.
   */
  message?: string

  /**
   * Whether to show an icon, or the name of the icon to display.
   */
  icon?: string

  // /**
  //  * Default icons to apply to the messages, when the icon is active.
  //  */
  // defaultIcons?: {
  //   /**
  //    * The default icon
  //    */
  //   'default'?: string

  //   /**
  //    * The muted icon
  //    */
  //   'muted'?: string

  //   /**
  //    * The info icon
  //    */
  //   'info'?: string

  //   /**
  //    * The success icon
  //    */
  //   'success'?: string

  //   /**
  //    * The warning icon
  //    */
  //   'warning'?: string

  //   /**
  //    * The destructive icon
  //    */
  //   'destructive'?: string

  //   /**
  //    * The primary icon
  //    */
  //   'primary'?: string
  // }

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
   */
  variant?: 'default' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'destructive'

  /**
   * The radius of the message.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}
export interface BaseMessageEmits {
  close: []
}
export interface BaseMessageSlots {
  'default': () => any
  'icon': () => any
  'close-button': () => any
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const satisfies Record<NonNullable<BaseMessageProps['rounded']>, string>

export const variants = {
  default: 'border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950',
  muted: 'border-muted-200 dark:border-muted-800 bg-muted-100 dark:bg-muted-950',
  primary: 'border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/10',
  info: 'border-info-200 dark:border-info-700 bg-info-100 dark:bg-info-500/10',
  success: 'border-success-200 dark:border-success-700 bg-success-100 dark:bg-success-500/10',
  warning: 'border-warning-200 dark:border-warning-700 bg-warning-100 dark:bg-warning-500/10',
  destructive: 'border-destructive-200 dark:border-destructive-700 bg-destructive-100 dark:bg-destructive-500/10',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const textVariants = {
  default: 'text-muted-500 dark:text-muted-400',
  muted: 'text-muted-500 dark:text-muted-500',
  primary: 'text-primary-800 dark:text-primary-200',
  info: 'text-info-800 dark:text-info-200',
  success: 'text-success-800 dark:text-success-200',
  warning: 'text-warning-800 dark:text-warning-200',
  destructive: 'text-destructive-800 dark:text-destructive-200',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const iconVariants = {
  default: 'text-white dark:text-white bg-muted-600 dark:bg-muted-900',
  muted: 'text-white dark:text-white bg-muted-400 dark:bg-muted-900',
  primary: 'text-primary-invert bg-primary-base dark:bg-primary-light',
  info: 'text-info-invert bg-info-500 dark:bg-info-500',
  success: 'text-success-invert bg-success-500 dark:bg-success-500',
  warning: 'text-warning-invert bg-warning-500 dark:bg-warning-500',
  destructive: 'text-destructive-invert bg-destructive-500 dark:bg-destructive-500',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>

export const closeVariants = {
  default: 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  muted: 'text-muted-500 dark:text-muted-500 hover:enabled:bg-muted-300/50 dark:hover:enabled:bg-muted-500/30 focus-visible:bg-muted-300/50 dark:focus-visible:bg-muted-500/30 active:enabled:bg-muted-300/20 dark:active:enabled:bg-muted-500/20',
  primary: 'text-primary-500 dark:text-primary-500 hover:enabled:bg-primary-300/50 dark:hover:enabled:bg-primary-500/30 focus-visible:bg-primary-300/50 dark:focus-visible:bg-primary-500/30 active:enabled:bg-primary-300/20 dark:active:enabled:bg-primary-500/20',
  info: 'text-info-500 dark:text-info-500 hover:enabled:bg-info-300/50 dark:hover:enabled:bg-info-500/30 focus-visible:bg-info-300/50 dark:focus-visible:bg-info-500/30 active:enabled:bg-info-300/20 dark:active:enabled:bg-info-500/20',
  success: 'text-success-500 dark:text-success-500 hover:enabled:bg-success-300/50 dark:hover:enabled:bg-success-500/30 focus-visible:bg-success-300/50 dark:focus-visible:bg-success-500/30 active:enabled:bg-success-300/20 dark:active:enabled:bg-success-500/20',
  warning: 'text-warning-500 dark:text-warning-500 hover:enabled:bg-warning-300/50 dark:hover:enabled:bg-warning-500/30 focus-visible:bg-warning-300/50 dark:focus-visible:bg-warning-500/30 active:enabled:bg-warning-300/20 dark:active:enabled:bg-warning-500/20',
  destructive: 'text-destructive-500 dark:text-destructive-500 hover:enabled:bg-destructive-300/50 dark:hover:enabled:bg-destructive-500/30 focus-visible:bg-destructive-300/50 dark:focus-visible:bg-destructive-500/30 active:enabled:bg-destructive-300/20 dark:active:enabled:bg-destructive-500/20',
} as const satisfies Record<NonNullable<BaseMessageProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseMessageProps>(), {
  message: '',
  icon: undefined,
  closeIcon: undefined,

  variant: 'default',
  rounded: 'sm',
})
const emits = defineEmits<BaseMessageEmits>()
const slots = defineSlots<BaseMessageSlots>()
const iconClose = useNuiConfig('icon', 'close', () => props.closeIcon)
</script>

<template>
  <div
    class="relative flex gap-2 border"
    :class="[
      props.rounded && radiuses[props.rounded],
      props.variant && variants[props.variant],
      props.icon ? 'py-1 ps-1 pe-6' : 'py-2 ps-2 pe-6',
    ]"
  >
    <div
      v-if="props.icon"
      class="flex size-10 shrink-0 items-center justify-center"
      :class="[
        props.icon && iconVariants[props.variant],
        props.rounded && radiuses[props.rounded],
      ]"
    >
      <slot name="icon">
        <Icon :name="props.icon" class="text-lg text-white dark:text-white" />
      </slot>
    </div>
    <span
      class="inline-flex items-center leading-normal font-sans text-sm"
      :class="[
        props.variant && textVariants[props.variant],
      ]"
    >
      <slot>{{ props.message }}</slot>
    </span>
    <div v-if="props.closable" class="absolute top-[-0.5rem] end-[-0.5rem] flex items-center justify-center bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-full size-8">
      <button
        type="button"
        tabindex="0"
        class="focus-visible:nui-focus flex cursor-pointer items-center justify-center shrink-0 size-6 rounded-full transition-colors duration-200"
        :class="[
          props.icon && closeVariants[props.variant],
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
