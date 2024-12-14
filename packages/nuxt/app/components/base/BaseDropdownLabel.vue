<script lang="ts">
import type { DropdownMenuLabelProps } from 'reka-ui'

interface BaseDropdownLabelProps extends DropdownMenuLabelProps {
  /**
   * The label to display for the dropdown.
   */
  label?: string
}
</script>


<script setup lang="ts">
import {
  useForwardProps,
} from 'reka-ui';
import { 
  reactiveOmit,
} from '@vueuse/core'

const props = withDefaults(defineProps<BaseDropdownLabelProps>(), {
  label: '',
})
const root = useForwardProps(reactiveOmit(props, ['label']));
</script>

<template>
  <DropdownMenuLabel
    v-bind="root"
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