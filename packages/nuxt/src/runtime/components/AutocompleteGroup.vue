<script setup lang="ts">
import type { BaseAutocompleteGroupProps, BaseAutocompleteGroupSlots } from '../types'
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<BaseAutocompleteGroupProps>(), {})
const slots = defineSlots<BaseAutocompleteGroupSlots>()

const forward = useForwardProps(props)
</script>

<template>
  <ComboboxGroup v-bind="forward">
    <slot />
  </ComboboxGroup>
</template>
