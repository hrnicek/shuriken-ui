<script lang="ts">
import type {
  ComboboxItemProps,
  ComboboxItemEmits,
} from 'reka-ui'

export interface BaseAutocompleteItemProps extends ComboboxItemProps {}
export interface BaseAutocompleteItemEmits extends ComboboxItemEmits {}
export type BaseAutocompleteItemSlots = {
  default(): any
}

export const variants = {
  'default-low': 'data-[highlighted]:bg-muted-100 dark:data-[highlighted]:bg-muted-700',
  'default-high': 'data-[highlighted]:bg-muted-100 dark:data-[highlighted]:bg-muted-900',
  'muted-low': 'data-[highlighted]:bg-muted-200 dark:data-[highlighted]:bg-muted-700',
  'muted-high': 'data-[highlighted]:bg-muted-200 dark:data-[highlighted]:bg-muted-900',
  'primary-low': 'data-[highlighted]:bg-primary-500/10 dark:data-[highlighted]:bg-primary-500/20',
  'primary-high': 'data-[highlighted]:bg-primary-500/10 dark:data-[highlighted]:bg-primary-500/20',
  'none': '',
} as const
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseAutocompleteContext, radiuses } from './BaseAutocomplete.vue'

const props = withDefaults(defineProps<BaseAutocompleteItemProps>(), {
  value: undefined,
  textValue: undefined,
})
const emits = defineEmits<BaseAutocompleteItemEmits>()
const slots = defineSlots<BaseAutocompleteItemSlots>()

// const rounded = useNuiDefaultProperty(props, 'BaseAutocompleteItem', 'rounded')

const context = injectBaseAutocompleteContext()

const iconCheck = useNuiDefaultIcon('check')

const forward = useForwardPropsEmits(reactiveOmit(props, []), emits)

</script>

<template>
  <ComboboxItem
    v-bind="forward"
    class="font-sans text-sm leading-none flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      context.rounded.value && radiuses[context.rounded.value],
      context.variant.value && variants[context.variant.value],
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
