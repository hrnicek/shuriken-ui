<script lang="ts">
import type { DropdownMenuLabelProps } from 'reka-ui'

export interface BaseDropdownLabelProps extends DropdownMenuLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
export type BaseDropdownLabelSlots = {
  default(): any
}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseDropdownLabelProps>(), {
  label: '',
})
const slots = defineSlots<BaseDropdownLabelSlots>()

const forward = useForwardProps(reactiveOmit(props, ['label']));
</script>

<template>
  <DropdownMenuLabel
    v-bind="forward"
    class="nui-dropdown-menu-header"
  >
    <div class="nui-dropdown-menu-header-inner">
      <h4 class="nui-dropdown-menu-header-title">
        <slot>
          {{ props.label }}
        </slot>
      </h4>
    </div>
  </DropdownMenuLabel>
</template>