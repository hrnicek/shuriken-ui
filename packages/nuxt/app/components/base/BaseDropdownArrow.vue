<script lang="ts">
import type {
  DropdownMenuArrowProps,
} from 'reka-ui';

interface BaseDropdownArrowProps extends DropdownMenuArrowProps {}
</script>

<script setup lang="ts">
import {
  useForwardProps,
} from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const root = useForwardProps(props);
</script>

<template>
  <DropdownMenuArrow v-bind="root" class="fill-muted-200 dark:fill-muted-700" />
</template>