<script lang="ts">
import type { TabsTriggerProps } from 'reka-ui'

export interface BaseTabsTriggerProps extends TabsTriggerProps {
  /**
   * The label to display for the tab
   */
  label: string

  /**
   * An optional icon to display next to the tab label
   */
  icon?: string

  /**
   * The type of tabs to display..
   *
   * @default 'tabs'
   */
  type?: 'tabs' | 'box'
}
export type BaseTabsTriggerSlots = {
  default(): any
}

</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseTabsContext, types } from './BaseTabs.vue'

const props = withDefaults(defineProps<BaseTabsTriggerProps>(), {
  type: undefined,
  icon: undefined,
})
const type = useNuiDefaultProperty(props, 'BaseTabs', 'type')

const context = injectBaseTabsContext()

const slots = defineSlots<BaseTabsTriggerSlots>()
const forward = useForwardProps(reactiveOmit(props, ['label', 'type', 'icon']))
</script>

<template>
  <TabsTrigger 
    v-bind="forward"
    class="nui-tab z-10 relative"
    :class="[
      (props.type || context.type.value) && types[props.type || context.type.value],
      props.icon && 'nui-tab-has-icon',
    ]"
  >
    <slot>
      <Icon v-if="props.icon" :name="props.icon" class="me-1 block size-5" />
      <span
        :class="[
          (props.type || context.type.value === 'box') && props.icon && 'text-[.85rem]',
          (props.type || context.type.value === 'box') && !props.icon && 'text-sm',
          (props.type || context.type.value === 'tabs') && 'text-sm',
        ]"
      >
        {{ props.label }}
      </span>
    </slot>
  </TabsTrigger>
</template>