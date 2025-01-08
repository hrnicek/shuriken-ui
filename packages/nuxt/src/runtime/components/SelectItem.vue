<script setup lang="ts">
import type { BaseSelectItemProps, BaseSelectItemSlots } from '../types';
import { BaseSelectItem as theme } from '#build/shuriken-ui/theme';
import { useForwardProps } from 'reka-ui'
import { injectBaseSelectContext } from './Select.vue'

import { useNuiConfig } from '../composables/default-property';

const context = injectBaseSelectContext()

const props = withDefaults(defineProps<BaseSelectItemProps>(), {
  textValue: undefined,
  value: undefined,
})
const slots = defineSlots<BaseSelectItemSlots>()

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardProps(props)
</script>

<template>
  <SelectItem
    v-bind="forward"
    class="text-xs leading-none text-muted-500 flex items-center h-[25px] pr-[35px] ps-[25px] relative select-none data-[disabled]:text-muted-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      theme.variants[context.variant],
      theme.radiuses[context.rounded],
    ]"
  >
    <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <Icon :name="iconCheck" />
    </SelectItemIndicator>
    <SelectItemText>
      <slot>
        {{ props.textValue }}
      </slot>
    </SelectItemText>
  </SelectItem>
</template>
