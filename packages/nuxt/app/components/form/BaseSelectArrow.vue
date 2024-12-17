<script lang="ts">
import type {
  SelectArrowProps,
} from 'reka-ui';

export interface BaseSelectArrowProps extends SelectArrowProps {}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui';

const props = withDefaults(defineProps<BaseSelectArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <SelectArrow v-bind="forward" class="fill-muted-200 dark:fill-muted-700" />
</template>