<script setup lang="ts">
import type { BaseAutocompleteItemProps, BaseAutocompleteItemEmits, BaseAutocompleteItemSlots } from '@shuriken-ui/types';
import { BaseAutocompleteItem as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseAutocompleteContext } from './Autocomplete.vue'

const props = withDefaults(defineProps<BaseAutocompleteItemProps>(), {
  value: undefined,
  textValue: undefined,
})
const emits = defineEmits<BaseAutocompleteItemEmits>()
const slots = defineSlots<BaseAutocompleteItemSlots>()

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, []), emits)

const context = injectBaseAutocompleteContext()
</script>

<template>
  <ComboboxItem
    v-bind="forward"
    class="font-sans text-sm leading-none flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      context.rounded && theme.radiuses[context.rounded],
      context.variant && theme.variants[context.variant],
    ]"
  >
    <ComboboxItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <Icon :name="iconCheck" />
    </ComboboxItemIndicator>

    <span>
      <slot />
    </span>
  </ComboboxItem>
</template>
