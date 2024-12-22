<script lang="ts">
import type {
  SelectArrowProps,
} from 'reka-ui';

export interface BaseSelectArrowProps extends SelectArrowProps {}

export const variants = {
  default: 'fill-muted-400 dark:fill-muted-500',
  muted: 'fill-muted-400 dark:fill-muted-500',
  none: '',
} as const

// @todo: low-contrast-theme
// export const variants = {
//   default: 'fill-white dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   muted: 'fill-muted-50 dark:fill-muted-800 stroke-muted-200 dark:stroke-muted-600',
//   none: '',
// } as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { injectBaseSelectContext, radiuses } from './BaseSelect.vue'

const context = injectBaseSelectContext()

const props = withDefaults(defineProps<BaseSelectArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <SelectArrow 
    v-bind="forward"
    :class="[
      context.variant.value && variants[context.variant.value]
    ]" 
  />
</template>