<script lang="ts">
import type { 
  SelectItemProps,
} from 'reka-ui'

export interface BaseSelectItemProps extends SelectItemProps {}
export type BaseSelectItemSlots = {
  default(): any
}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { injectBaseSelectContext, radiuses } from './BaseSelect.vue'

const context = injectBaseSelectContext()

const props = withDefaults(defineProps<BaseSelectItemProps>(), {
  textValue: undefined,
  value: undefined,
})
const slots = defineSlots<BaseSelectItemSlots>()

const iconCheck = useNuiDefaultIcon('check')
const forward = useForwardProps(props)

const variants = {
  'default': 'data-[highlighted]:bg-muted-100 data-[highlighted]:text-primary-500',
  'muted': 'data-[highlighted]:bg-muted-200 data-[highlighted]:text-primary-500',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
//   'muted': '',
// } as const
</script>

<template>
  <SelectItem
    v-bind="forward"
    class="text-xs leading-none text-muted-500 flex items-center h-[25px] pr-[35px] ps-[25px] relative select-none data-[disabled]:text-muted-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
    :class="[
      variants[context.variant.value],
      radiuses[context.rounded.value],
    ]"
  >
    <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <Icon :name="iconCheck" />
    </SelectItemIndicator>
    <SelectItemText>
      <slot>
        {{ props.textValue }}
      </slot>
    </SelectItemText>
  </SelectItem>
</template>
