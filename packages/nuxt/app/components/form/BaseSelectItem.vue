<script lang="ts">
import type { 
  SelectItemProps,
} from 'reka-ui'

export interface BaseSelectItemProps extends SelectItemProps {}
export type BaseSelectItemSlots = {
  default(): any
}

const variants = {
  'default': 'data-[highlighted]:bg-muted-100 dark:data-[highlighted]:bg-muted-800 text-muted-700 data-[highlighted]:text-primary-base dark:text-muted-300 dark:data-[highlighted]:text-primary-light',
  'muted': 'data-[highlighted]:bg-muted-200 dark:data-[highlighted]:bg-muted-800 text-muted-800 data-[highlighted]:text-primary-base dark:text-muted-400 dark:data-[highlighted]:text-primary-light',
} as const

// @todo: low-contrast-theme
// const variants = {
//   'default': 'bg-white dark:bg-muted-800 border-muted-300 dark:border-muted-700 border text-muted-500 data-placeholder:text-muted-300 dark:data-placeholder:text-muted-700',
//   'muted': '',
// } as const
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

const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardProps(props)
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
