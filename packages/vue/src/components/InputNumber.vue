<script lang="ts">
import type {
  NumberFieldRootEmits,
  NumberFieldRootProps,
} from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  useForwardExpose,
  useForwardPropsEmits,
} from 'reka-ui'
import { useAttrs } from 'vue'
import { useInertiaConfig } from '../composables/useInertiaConfig'

import { useNuiId } from '../composables/useNuiId'
import { tm } from '../utils/tw-merge'

export interface BaseInputNumberProps extends NumberFieldRootProps {
  /**
   * The inputmode to use for the input, usually for mobile devices.
   */
  inputmode?: 'numeric' | 'decimal'

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string

  /**
   * The contrast of the input.
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the input.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Optional classes to pass to the inner components.
   */
  classes?: {
    root?: string | string[]
    button?: string | string[]
    buttonWrapper?: string | string[]
  }
}
export interface BaseInputNumberEmits extends NumberFieldRootEmits {}
export interface BaseInputNumberSlots {}

export const variants = {
  default: 'bg-input-default-bg border-input-default-border border',
  muted: 'bg-input-muted-bg border-input-muted-border border',
} as const satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const inputVariants = {
  default: 'text-input-default-text placeholder:text-input-default-placeholder',
  muted: 'text-input-muted-text placeholder:text-input-muted-placeholder',
} as const satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>

export const sizes = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-sm',
  xl: 'h-14 text-base',
} as const satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>

export const spacings = {
  sm: 'px-2 max-w-[calc(100%_-_4rem)]',
  md: 'px-3 max-w-[calc(100%_-_5rem)]',
  lg: 'px-4 max-w-[calc(100%_-_6rem)]',
  xl: 'px-4 max-w-[calc(100%_-_7rem)]',
} as const satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const satisfies Record<NonNullable<BaseInputNumberProps['rounded']>, string>

export const buttonSizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
} as const satisfies Record<NonNullable<BaseInputNumberProps['size']>, string>

export const buttonVariants = {
  default: 'text-input-default-button-text bg-input-default-button-bg group-data-[pressed]/button:bg-input-default-button-bg-active',
  muted: 'text-input-muted-button-text bg-input-muted-button-bg group-data-[pressed]/button:bg-input-muted-button-bg-active',
} as const satisfies Record<NonNullable<BaseInputNumberProps['variant']>, string>
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputNumberProps>(), {
  inputmode: undefined,
  placeholder: undefined,

  rounded: 'md',
  size: 'md',
  variant: 'default',

  defaultValue: undefined,
  formatOptions: undefined,
  modelValue: undefined,
  name: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseInputNumberEmits>()
const slots = defineSlots<BaseInputNumberSlots>()

const attrs = useAttrs()
const id = useNuiId(() => props.id)

const iconIncrement = useInertiaConfig('icon', 'plus')
const iconDecrement = useInertiaConfig('icon', 'minus')

const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'variant', 'rounded', 'size', 'placeholder', 'classes']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <NumberFieldRoot
    :id
    v-bind="forward"
    :class="tm([
      'has-focus-visible:nui-focus relative w-full flex font-sans relative data-disabled:opacity-50 has-aria-invalid:border-destructive-base! has-aria-invalid:ring-destructive-base!',
      variants[props.variant],
      radiuses[props.rounded],
      sizes[props.size],
      props.classes.root,
    ])"
  >
    <NumberFieldDecrement
      :class="tm([
        'flex items-center justify-center shrink-0 p-1 group/button disabled:cursor-not-allowed cursor-pointer',
        buttonSizes[props.size],
        radiuses[props.rounded],
        props.classes.buttonWrapper,
      ])"
    >
      <span
        :class="tm([
          'h-full w-full flex items-center justify-center transition-colors duration-300',
          radiuses[props.rounded],
          buttonVariants[props.variant],
          props.classes.button,
        ])"
      >
        <Icon :name="iconDecrement" />
      </span>
    </NumberFieldDecrement>
    <NumberFieldInput
      v-bind="attrs"
      :ref="forwardRef"
      :class="tm([
        'outline-none text-center grow disabled:cursor-not-allowed text-ellipsis',
        inputVariants[props.variant],
        spacings[props.size],
        sizes[props.size],
      ])"
      :placeholder="props.placeholder"
      :inputmode="props.inputmode"
      :disabled="props.disabled"
    />
    <NumberFieldIncrement
      :class="tm([
        'flex items-center justify-center shrink-0 p-1 group/button disabled:cursor-not-allowed cursor-pointer',
        buttonSizes[props.size],
        props.classes.buttonWrapper,
      ])"
    >
      <span
        :class="tm([
          'h-full w-full flex items-center justify-center transition-colors duration-300',
          radiuses[props.rounded],
          buttonVariants[props.variant],
          props.classes.button,
        ])"
      >
        <Icon :name="iconIncrement" />
      </span>
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>
