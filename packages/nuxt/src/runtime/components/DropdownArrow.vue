<script setup lang="ts">
import type { BaseDropdownArrowProps } from '../types';
import { BaseDropdownArrow as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui';
import { injectBaseDropdownContext } from './Dropdown.vue'

const context = injectBaseDropdownContext()
const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuArrow
    v-bind="forward"
    class="relative z-10 "
    :class="[
      '-translate-[1px]',
      context.variant && theme.variants[context.variant]
    ]"
  />
</template>