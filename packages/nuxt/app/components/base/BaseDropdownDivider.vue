<script lang="ts">
import type {
  DropdownMenuSeparatorProps,
} from 'reka-ui';

export interface BaseDropdownItemProps extends DropdownMenuSeparatorProps {}
</script>

<script setup lang="ts">
import {
  useForwardProps,
} from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownItemProps>(), {

})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuSeparator v-bind="forward" class="nui-dropdown-divider" />
</template>
