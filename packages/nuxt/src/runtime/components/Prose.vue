<script setup lang="ts">
import type { BaseProseProps, BaseProseSlots } from '../types'
import { BaseProse as theme } from '@shuriken-ui/theme-iga'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<BaseProseProps>(), {
  rounded: theme.defaults.rounded,
})
const slots = defineSlots<BaseProseSlots>()

const forward = useForwardProps(reactiveOmit(props, ['rounded']))
</script>

<template>
  <Primitive
    v-bind="forward"
    class="prose dark:prose-invert prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 prose-th:p-4 prose-td:p-4 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700"
    :class="props.rounded && theme.radiuses[props.rounded]"
  >
    <slot />
  </Primitive>
</template>
