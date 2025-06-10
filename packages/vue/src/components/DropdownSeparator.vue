<script lang="ts">
import type { DropdownMenuSeparatorProps } from 'reka-ui'
import type { BaseDropdownContext } from './Dropdown.vue'
import { DropdownMenuSeparator, useForwardProps } from 'reka-ui'
import { injectBaseDropdownContext } from './Dropdown.vue'

export interface BaseDropdownSeparatorProps extends DropdownMenuSeparatorProps {}

export const variants = {
  default: 'border-portal-default-border',
  muted: 'border-portal-muted-border',
  primary: 'border-portal-default-border',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseDropdownSeparatorProps>(), {})
const context = injectBaseDropdownContext()
const forward = useForwardProps(props)
</script>

<template>
  <DropdownMenuSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && variants[context.variant],
    ]"
  />
</template>
