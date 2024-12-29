<script lang="ts">
import type { PrimitiveProps } from 'reka-ui';

export interface BaseProseProps extends PrimitiveProps {
  /**
   * Inner elements shapes.
   *
   * @default 'none'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}
export type BaseProseSlots = {
  default(): any
}

export const radiuses = {
  none: 'prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none',
  sm: 'prose-img:rounded-sm prose-pre:rounded-sm prose-table:rounded-sm',
  md: 'prose-img:rounded-md prose-pre:rounded-md prose-table:rounded-md',
  lg: 'prose-img:rounded-lg prose-pre:rounded-lg prose-table:rounded-lg',
} as const
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseProseProps>(), {
  rounded: undefined,
})
const slots = defineSlots<BaseProseSlots>()

const rounded = useNuiConfig('BaseProse', 'rounded', () => props.rounded)
const forward = useForwardProps(reactiveOmit(props, ['rounded']))
</script>

<template>
  <Primitive 
    v-bind="forward"
    class="prose dark:prose-invert prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 prose-th:p-4 prose-td:p-4 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700"
    :class="rounded && radiuses[rounded]"
  >
    <slot />
  </Primitive>
</template>
