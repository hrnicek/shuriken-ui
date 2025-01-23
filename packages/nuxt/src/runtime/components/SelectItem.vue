<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import type { BaseSelectItemProps, BaseSelectItemSlots } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, VisuallyHidden } from 'reka-ui'
import { useNuiConfig } from '../composables/useNuiConfig'
import { BaseSelectItem as theme } from '../theme'

import { injectBaseSelectContext } from './Select.vue'

const props = withDefaults(defineProps<BaseSelectItemProps<T>>(), {
  rawSlot: false,
  textValue: undefined,
  value: undefined,
})

const slots = defineSlots<BaseSelectItemSlots>()

const context = injectBaseSelectContext()

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardProps(reactiveOmit(props, ['rawSlot'])) as any
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
    <SelectItemText v-if="!props.rawSlot">
      <slot>
        {{ props.textValue }}
      </slot>
    </SelectItemText>
    <slot v-else>
      {{ props.textValue }}
    </slot>
  </SelectItem>
</template>
