<script lang="ts">
import type {
  DropdownMenuSeparatorProps,
} from 'reka-ui';

interface BaseDropdownItemProps extends DropdownMenuSeparatorProps {}
</script>

<script setup lang="ts">
import {
  useForwardProps,
} from 'reka-ui';

const props = withDefaults(defineProps<BaseDropdownItemProps>(), {

})
const root = useForwardProps(props);
</script>

<template>
  <DropdownMenuSeparator v-bind="root" class="nui-dropdown-divider" />
</template>
