<script setup lang="ts">
import type { BaseDropdownArrowProps } from '@shuriken-ui/types';
import { BaseDropdownArrow as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui';
import { injectBaseDropdownContext } from './BaseDropdown.vue'

const context = injectBaseDropdownContext()
const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuArrow
    v-bind="forward"
    class="relative z-10"
    :class="[
      context.variant && theme.variants[context.variant]
    ]"
  />
</template>