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
    class="leading-none text-muted-500 flex items-center ps-9 pe-4 relative select-none data-[disabled]:text-muted-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      theme.variants[context.variant],
      theme.radiuses[context.rounded],
      theme.sizes[context.size],
    ]"
  >
    <SelectItemIndicator class="absolute left-0 w-9 inline-flex items-center justify-center">
      <Icon :name="iconCheck" class="size-4" />
    </SelectItemIndicator>
    <SelectItemText>
      <slot>
        {{ props.textValue }}
      </slot>
    </SelectItemText>
  </SelectItem>
</template>
