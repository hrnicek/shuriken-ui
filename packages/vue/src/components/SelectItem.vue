<script lang="ts">
import type {
  AcceptableValue,
  SelectItemProps,
} from 'reka-ui'
import type { BaseSelectContext } from './Select.vue'
import { reactiveOmit } from '@vueuse/core'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  useForwardProps,
} from 'reka-ui'
import { useInertiaConfig } from '../composables/useInertiaConfig'

import { injectBaseSelectContext, radiuses } from './Select.vue'

export interface BaseSelectItemProps<T = AcceptableValue> extends SelectItemProps<T> {
  rawSlot?: boolean
}
export interface BaseSelectItemSlots {
  default: () => any
}

export const variants = {
  default: 'data-[highlighted]:bg-portal-default-item-bg-active text-portal-default-item-text data-[highlighted]:text-portal-default-item-text-active',
  muted: 'data-[highlighted]:bg-portal-muted-item-bg-active text-portal-muted-item-text data-[highlighted]:text-portal-muted-item-text-active',
} as const as Record<BaseSelectContext['variant'], string>

export const sizes = {
  sm: 'min-h-6 text-xs',
  md: 'min-h-8 text-sm',
  lg: 'min-h-10 text-sm',
  xl: 'min-h-12 text-base',
} as const satisfies Record<NonNullable<BaseSelectContext['size']>, string>
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
const props = withDefaults(defineProps<BaseSelectItemProps<T>>(), {
  rawSlot: false,
  textValue: undefined,
  value: undefined,
})

const slots = defineSlots<BaseSelectItemSlots>()

const context = injectBaseSelectContext()

const iconCheck = useInertiaConfig('icon', 'check')
const forward = useForwardProps(reactiveOmit(props, ['rawSlot'])) as any
</script>

<template>
  <SelectItem
    v-bind="forward"
    class="leading-none text-muted-500 flex items-center ps-9 pe-4 relative select-none data-[disabled]:text-muted-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      variants[context.variant],
      radiuses[context.rounded],
      sizes[context.size],
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
