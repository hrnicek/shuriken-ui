<script lang="ts">
import type { DropdownMenuArrowProps } from 'reka-ui'
import type { BaseDropdownContext } from './Dropdown.vue'
import { DropdownMenuArrow, useForwardProps } from 'reka-ui'
import { injectBaseDropdownContext } from './Dropdown.vue'

export interface BaseDropdownArrowProps extends DropdownMenuArrowProps {}

export const variants = {
  default: 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  muted: 'fill-muted-50 dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  primary: 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  none: '',
} as const satisfies Record<NonNullable<BaseDropdownContext['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const context = injectBaseDropdownContext()
const forward = useForwardProps(props)
</script>

<template>
  <DropdownMenuArrow
    v-bind="forward"
    class="relative z-10  -translate-[1px]"
    :class="[
      context.variant && variants[context.variant],
    ]"
  />
</template>
