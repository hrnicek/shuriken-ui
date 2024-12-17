<script lang="ts">
import type { 
  SelectItemProps,
} from 'reka-ui'

export interface BaseSelectItemProps extends SelectItemProps {}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<BaseSelectItemProps>(), {
  textValue: undefined,
  value: undefined,
})
const slots = defineSlots<{
  default(): any
}>()
const iconCheck = useNuiDefaultIcon('check')
const forward = useForwardProps(props)
</script>

<template>
  <SelectItem
    v-bind="forward"
    class="text-xs leading-none text-muted-500 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-muted-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-muted-100 data-[highlighted]:text-primary-500"
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
