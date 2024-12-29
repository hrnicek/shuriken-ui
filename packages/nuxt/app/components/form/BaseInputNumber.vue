<script lang="ts">
import type {
  NumberFieldRootProps,
  NumberFieldRootEmits,
} from 'reka-ui'

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
   *
   * @default 'default'
   */
  variant?: 'default' | 'muted'

  /**
   * The radius of the input.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * The size of the input.
   *
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
export interface BaseInputNumberEmits extends NumberFieldRootEmits {}
export type BaseInputNumberSlots = {}

export const variants = {
  default: 'bg-white dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-700 has-aria-invalid:border-destructive-base!',
  muted: 'bg-muted-50 dark:bg-muted-900 border-muted-300 dark:border-muted-800 border text-muted-500 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-700 has-aria-invalid:border-destructive-base!',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700',
//   'muted': 'bg-muted-50 dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 placeholder:text-muted-300 dark:placeholder:text-muted-700',
// } as const

export const sizes = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-sm',
  xl: 'h-14 text-base',
} as const


export const spacings = {
  sm: 'px-2 max-w-[calc(100%_-_4rem)]',
  md: 'px-3 max-w-[calc(100%_-_5rem)]',
  lg: 'px-4 max-w-[calc(100%_-_6rem)]',
  xl: 'px-4 max-w-[calc(100%_-_7rem)]',
} as const

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-xl',
} as const

export const buttonSizes = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-14',
} as const

export const buttonVariants = {
  default: 'bg-muted-100 group-data-[pressed]/button:bg-muted-200 dark:bg-muted-800 dark:group-data-[pressed]/button:bg-muted-700',
  muted: 'bg-muted-200 group-data-[pressed]/button:bg-muted-300 dark:bg-muted-800 dark:group-data-[pressed]/button:bg-muted-700',
} as const
</script>


<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputNumberProps>(), {
  inputmode: undefined,
  rounded: undefined,
  size: undefined,
  variant: undefined,
  placeholder: undefined,
  
  defaultValue: undefined,
  formatOptions: undefined,
  modelValue: undefined,
  name: undefined,
})
const emits = defineEmits<BaseInputNumberEmits>()
const slots = defineSlots<BaseInputNumberSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)
const variant = useNuiConfig('BaseInputNumber', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseInputNumber', 'rounded', () => props.rounded)
const size = useNuiConfig('BaseInputNumber', 'size', () => props.size)

const iconIncrement = useNuiConfig('icon', 'plus')
const iconDecrement = useNuiConfig('icon', 'minus')

const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'variant', 'rounded', 'size', 'placeholder']), emits)
</script>

<template>
  <NumberFieldRoot
    :id
    v-bind="forward"
    class="nui-focus relative w-full flex font-sans relative data-disabled:opacity-50"
    :class="[
      variant && variants[variant],
      rounded && radiuses[rounded],
    ]"
  >
    <NumberFieldDecrement 
      class="flex items-center justify-center shrink-0 p-1 enabled:group/button disabled:cursor-not-allowed cursor-pointer"
      :class="[
        size && buttonSizes[size],
        rounded && radiuses[rounded],
      ]"
    >
      <span class="h-full w-full flex items-center justify-center transition-colors duration-300"
        :class="[
          rounded && radiuses[rounded],
          variant && buttonVariants[variant],
        ]"  
      >
        <Icon :name="iconDecrement" />
      </span>
    </NumberFieldDecrement>
    <NumberFieldInput
      v-bind="attrs"
      class="outline-none text-center grow disabled:cursor-not-allowed placeholder:text-muted-300 dark:placeholder:text-muted-700"
      :class="[
        size && spacings[size],
        size && sizes[size],
      ]"
      :placeholder="placeholder"
      :inputmode="props.inputmode"
      :disabled="props.disabled"
    />
    <NumberFieldIncrement
      class="flex items-center justify-center shrink-0 p-1 enabled:group/button disabled:cursor-not-allowed cursor-pointer"
      :class="[
        size && buttonSizes[size],
      ]"
    >
      <span class="h-full w-full flex items-center justify-center transition-colors duration-300"
        :class="[
          rounded && radiuses[rounded],
          variant && buttonVariants[variant],
        ]"  
      >
        <Icon :name="iconIncrement" />
      </span>
    </NumberFieldIncrement> 
  </NumberFieldRoot>
</template>
