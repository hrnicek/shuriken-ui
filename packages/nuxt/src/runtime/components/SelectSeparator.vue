<script setup lang="ts">
import type { BaseSelectSeparatorProps } from '../types';
import { useForwardProps } from 'reka-ui';

const props = withDefaults(defineProps<BaseSelectSeparatorProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <SelectSeparator v-bind="forward" class="h-[1px] bg-muted-200 dark:bg-muted-700 m-2" />
</template>
