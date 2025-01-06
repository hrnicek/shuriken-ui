<script setup lang="ts">
import type { BaseDropdownSeparatorProps } from '@shuriken-ui/types';
import { BaseDropdownSeparator as theme } from '@shuriken-ui/theme-iga';
import { useForwardProps } from 'reka-ui';
import { injectBaseDropdownContext } from './BaseDropdown.vue'

const context = injectBaseDropdownContext()
const props = withDefaults(defineProps<BaseDropdownSeparatorProps>(), {})
const forward = useForwardProps(props);
</script>

<template>
  <DropdownMenuSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && theme.variants[context.variant]
    ]"
  />
</template>
