<script setup lang="ts">
import type { BaseInputNumberProps, BaseInputNumberEmits, BaseInputNumberSlots } from '../types';
import { BaseInputNumber as theme } from '@shuriken-ui/theme-iga';
import { useForwardExpose, useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useAttrs } from 'vue'

import { useNinjaId } from '../composables/input-id';
import { useNuiConfig } from '../composables/default-property';

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseInputNumberProps>(), {
  inputmode: undefined,
  placeholder: undefined,

  rounded: theme.defaults.rounded,
  size: theme.defaults.size,
  variant: theme.defaults.variant,
  
  defaultValue: undefined,
  formatOptions: undefined,
  modelValue: undefined,
  name: undefined,
})
const emits = defineEmits<BaseInputNumberEmits>()
const slots = defineSlots<BaseInputNumberSlots>()

const attrs = useAttrs()
const id = useNinjaId(() => props.id)

const iconIncrement = useNuiConfig('icon', 'plus')
const iconDecrement = useNuiConfig('icon', 'minus')

const forward = useForwardPropsEmits(reactiveOmit(props, ['id', 'variant', 'rounded', 'size', 'placeholder']), emits)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <NumberFieldRoot
    :id
    v-bind="forward"
    class="has-focus-visible:nui-focus relative w-full flex font-sans relative data-disabled:opacity-50 has-aria-invalid:border-destructive-base!"
    :class="[
      theme.variants[props.variant],
      theme.radiuses[props.rounded],
    ]"
  >
    <NumberFieldDecrement 
      class="flex items-center justify-center shrink-0 p-1 group/button disabled:cursor-not-allowed cursor-pointer"
      :class="[
        theme.buttonSizes[props.size],
        theme.radiuses[props.rounded],
      ]"
    >
      <span class="h-full w-full flex items-center justify-center transition-colors duration-300"
        :class="[
          theme.radiuses[props.rounded],
          theme.buttonVariants[props.variant],
        ]"  
      >
        <Icon :name="iconDecrement" />
      </span>
    </NumberFieldDecrement>
    <NumberFieldInput
      v-bind="attrs"
      :ref="forwardRef"
      class="outline-none text-center grow disabled:cursor-not-allowed"
      :class="[
        theme.inputVariants[props.variant],
        theme.spacings[props.size],
        theme.sizes[props.size],
      ]"
      :placeholder="props.placeholder"
      :inputmode="props.inputmode"
      :disabled="props.disabled"
    />
    <NumberFieldIncrement
      class="flex items-center justify-center shrink-0 p-1 group/button disabled:cursor-not-allowed cursor-pointer"
      :class="[
        theme.buttonSizes[props.size],
      ]"
    >
      <span
        class="h-full w-full flex items-center justify-center transition-colors duration-300"
        :class="[
          theme.radiuses[props.rounded],
          theme.buttonVariants[props.variant],
        ]"  
      >
        <Icon :name="iconIncrement" />
      </span>
    </NumberFieldIncrement> 
  </NumberFieldRoot>
</template>
