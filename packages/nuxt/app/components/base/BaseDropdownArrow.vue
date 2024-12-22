<script lang="ts">
import type {
  DropdownMenuArrowProps,
} from 'reka-ui';

export interface BaseDropdownArrowProps extends DropdownMenuArrowProps {}

export const variants = {
  'default': 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'muted': 'fill-muted-50 dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'primary': 'fill-white dark:fill-muted-950 stroke-muted-200 dark:stroke-muted-800',
  'none': '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   'default': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   'muted': 'fill-muted-50 dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   'primary': 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   'none': '',
// } as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { injectBaseDropdownContext } from './BaseDropdown.vue'

const context = injectBaseDropdownContext()
const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuArrow v-bind="forward" :class="[
      context.variant.value && variants[context.variant.value]
    ]"
  />
</template>