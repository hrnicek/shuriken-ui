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
  default: 'data-[highlighted]:bg-muted-100 text-muted-700 data-[highlighted]:text-primary-500 dark:text-muted-300 dark:data-[highlighted]:text-primary-400',
  muted: 'data-[highlighted]:bg-muted-200 text-muted-800 data-[highlighted]:text-primary-500 dark:text-muted-400 dark:data-[highlighted]:text-primary-400',
  none: '',
} as const

// export const variants = {
//   default: '',
//   muted: '',
//   none: '',
// } as const
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
