<script lang="ts">
import type {
  DropdownMenuSeparatorProps,
} from 'reka-ui';

export interface BaseDropdownSeparatorProps extends DropdownMenuSeparatorProps {}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownSeparatorProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuSeparator v-bind="forward" class="nui-dropdown-divider" />
</template>
