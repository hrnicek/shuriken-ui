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
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

  /**
   * The radius of the input.
   *
   * @since 2.0.0
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

export const radiuses = {
  none: '',
  sm: 'nui-input-number-rounded-sm',
  md: 'nui-input-number-rounded-md',
  lg: 'nui-input-number-rounded-lg',
  full: 'nui-input-number-rounded-full',
} as const

export const sizes = {
  sm: 'nui-input-number-sm',
  md: 'nui-input-number-md',
  lg: 'nui-input-number-lg',
  xl: 'nui-input-number-xl',
} as const

export const contrasts = {
  'default': 'nui-input-number-default',
  'default-contrast': 'nui-input-number-default-contrast',
  'muted': 'nui-input-number-muted',
  'muted-contrast': 'nui-input-number-muted-contrast',
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
  contrast: undefined,
  placeholder: undefined,
  
  defaultValue: undefined,
  formatOptions: undefined,
  modelValue: undefined,
  name: undefined,
})
const emits = defineEmits<BaseInputNumberEmits>()
const slots = defineSlots<BaseInputNumberSlots>()

// function looseToNumber(val: any) {
//   const n = Number.parseFloat(val)
//   return Number.isNaN(n) ? val : n
// }

// const [modelValue, modelModifiers] = defineModel<number, 'lazy' | 'raw'>({
//   set(value) {
//     if (modelModifiers.raw) {
//       return value
//     }

//     return looseToNumber(value)
//   },
// })

const id = useNinjaId(() => props.id)
const contrast = useNuiDefaultProperty(props, 'BaseInputNumber', 'contrast')
const rounded = useNuiDefaultProperty(props, 'BaseInputNumber', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseInputNumber', 'size')

const iconIncrement = useNuiDefaultIcon('plus')
const iconDecrement = useNuiDefaultIcon('minus')

const forward = useForwardPropsEmits(reactiveOmit(props, ['contrast', 'rounded', 'size', 'placeholder']), emits)

// const inputRef = ref<HTMLInputElement>()

// defineExpose({
//   /**
//    * The underlying HTMLInputElement element.
//    */
//   el: inputRef,

//   /**
//    * The internal id of the radio input.
//    */
//   id,
// })


// const floatPrecision = computed(() => {
//   if (!Number.isFinite(props.step) || Number.isNaN(props.step))
//     return 0
//   let exp = 1
//   let precision = 0
//   while (Math.round(props.step * exp) / exp !== props.step) {
//     exp *= 10
//     precision++
//   }
//   return precision
// })
// const floatPrecisionExp = computed(() => 10 ** floatPrecision.value)
// const stepAbs = computed(() => Math.abs(props.step))

// function clamp(value: number) {
//   const rounded
//     = Math.round(value * floatPrecisionExp.value) / floatPrecisionExp.value

//   return Math.max(
//     Math.min(rounded, props.max ?? Number.POSITIVE_INFINITY),
//     props.min ?? Number.NEGATIVE_INFINITY,
//   )
// }

// function increment() {
//   if (props.disabled)
//     return

//   if (modelValue.value === undefined) {
//     modelValue.value = 0
//     return
//   }

//   if (typeof modelValue.value === 'number') {
//     modelValue.value = clamp(modelValue.value + stepAbs.value)
//   }
// }

// function decrement() {
//   if (props.disabled)
//     return

//   if (modelValue.value === undefined) {
//     modelValue.value = 0
//     return
//   }

//   if (typeof modelValue.value === 'number') {
//     modelValue.value = clamp(modelValue.value - stepAbs.value)
//   }
// }

// let incrementInterval: any
// function startIncrement() {
//   if (props.disabled)
//     return

//   increment()
//   let i = 0

//   incrementInterval = setInterval(() => {
//     i++
//     increment()
//     if (i > 10) {
//       clearInterval(incrementInterval)
//       incrementInterval = setInterval(increment, 50)
//     }
//   }, 150)
// }
// function stopIncrement() {
//   clearInterval(incrementInterval)
// }

// let decrementInterval: any
// function startDecrement() {
//   if (props.disabled)
//     return

//   decrement()
//   let i = 0

//   decrementInterval = setInterval(() => {
//     i++
//     decrement()
//     if (i > 10) {
//       clearInterval(decrementInterval)
//       decrementInterval = setInterval(decrement, 50)
//     }
//   }, 150)
// }
// function stopDecrement() {
//   clearInterval(decrementInterval)
// }

// onBeforeUnmount(() => {
//   clearInterval(incrementInterval)
//   clearInterval(decrementInterval)
// })
</script>

<template>
  <NumberFieldRoot
    v-bind="forward"
    class="nui-input-number-wrapper"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.colorFocus && 'nui-input-number-focus',
    ]"
  >
    <div class="nui-input-number-outer flex gap-2">
      <NumberFieldDecrement>
        <Icon :name="iconDecrement" />
      </NumberFieldDecrement>
      <NumberFieldInput
        class="nui-input-number outline-none grow"
        :placeholder="placeholder"
        :inputmode="props.inputmode"
        :disabled="props.disabled"
      />
      <NumberFieldIncrement>
        <Icon :name="iconIncrement" />
      </NumberFieldIncrement> 
    </div>
  </NumberFieldRoot>
</template>
