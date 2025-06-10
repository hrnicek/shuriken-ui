<script lang="ts">
import type {
  SelectSeparatorProps,
} from 'reka-ui'
import { SelectSeparator, useForwardProps } from 'reka-ui'

export interface BaseSelectSeparatorProps extends SelectSeparatorProps {}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSelectSeparatorProps>(), {})
const forward = useForwardProps(props)
</script>

<template>
  <SelectSeparator v-bind="forward" class="h-[1px] bg-muted-200 dark:bg-muted-700 m-2" />
</template>
