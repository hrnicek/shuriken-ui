<script setup lang="ts">
import type { BaseDropdownArrowProps } from '../types'
import { useForwardProps } from 'reka-ui'
import { BaseDropdownArrow as theme } from '../theme'
import { injectBaseDropdownContext } from './Dropdown.vue'

const props = withDefaults(defineProps<BaseDropdownArrowProps>(), {})
const context = injectBaseDropdownContext()
const forward = useForwardProps(props)
</script>

<template>
  <DropdownMenuArrow
    v-bind="forward"
    class="relative z-10  -translate-[1px]"
    :class="[
      context.variant && theme.variants[context.variant],
    ]"
  />
</template>
