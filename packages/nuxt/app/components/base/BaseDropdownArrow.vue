<script lang="ts">
import type {
  DropdownMenuArrowProps,
} from 'reka-ui';

export interface BaseDropdownArrowProps extends DropdownMenuArrowProps {}
</script>

<script setup lang="ts">
import {
  useForwardProps,
} from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuArrow v-bind="forward" class="fill-muted-200 dark:fill-muted-700" />
</template>