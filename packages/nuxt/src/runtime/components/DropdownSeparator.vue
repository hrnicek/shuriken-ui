<script setup lang="ts">
import type { BaseDropdownSeparatorProps } from '../types'
import { useForwardProps } from 'reka-ui'
import { BaseDropdownSeparator as theme } from '../theme'
import { injectBaseDropdownContext } from './Dropdown.vue'

const props = withDefaults(defineProps<BaseDropdownSeparatorProps>(), {})
const context = injectBaseDropdownContext()
const forward = useForwardProps(props)
</script>

<template>
  <DropdownMenuSeparator
    v-bind="forward"
    class="my-2 block h-px w-full border-t"
    :class="[
      context.variant && theme.variants[context.variant],
    ]"
  />
</template>
