<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'

export interface BaseProseProps extends PrimitiveProps {
  /**
   * Inner elements shapes.
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

export interface BaseProseSlots {
  default: () => any
}

export interface BaseProseConfig {
  rounded: NonNullable<BaseProseProps['rounded']>
}

export const radiuses = {
  none: 'prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none',
  sm: 'prose-img:rounded-sm prose-pre:rounded-sm prose-table:rounded-sm',
  md: 'prose-img:rounded-md prose-pre:rounded-md prose-table:rounded-md',
  lg: 'prose-img:rounded-lg prose-pre:rounded-lg prose-table:rounded-lg',
} as const satisfies Record<NonNullable<BaseProseProps['rounded']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseProseProps>(), {
  rounded: 'none',
})
const slots = defineSlots<BaseProseSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="prose dark:prose-invert prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 prose-th:p-4 prose-td:p-4 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700"
    :class="props.rounded && radiuses[props.rounded]"
  >
    <slot />
  </Primitive>
</template>
