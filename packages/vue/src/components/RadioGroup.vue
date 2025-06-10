<script lang="ts">
import type {
  RadioGroupRootEmits,
  RadioGroupRootProps,
} from 'reka-ui'
import type { BaseRadioProps } from './Radio.vue'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'

export interface BaseRadioGroupProps extends RadioGroupRootProps {
  items?: BaseRadioProps[]
}
export interface BaseRadioGroupEmits extends RadioGroupRootEmits {}
export interface BaseRadioGroupSlots {
  default: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  modelValue: undefined,
  name: undefined,
  orientation: undefined,

  items: () => [],
})
const emits = defineEmits<BaseRadioGroupEmits>()
const slots = defineSlots<BaseRadioGroupSlots>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupRoot v-bind="forward">
    <slot>
      <BaseRadio
        v-for="(item, key) in props.items"
        :key
        v-bind="item"
      />
    </slot>
  </RadioGroupRoot>
</template>
