<script lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { TabsTrigger, useForwardProps } from 'reka-ui'
import { injectBaseTabsContext, types } from './Tabs.vue'

export interface BaseTabsTriggerProps extends TabsTriggerProps {
  /**
   * The label to display for the tab
   */
  label?: string

  /**
   * An optional icon to display next to the tab label
   */
  icon?: string

  /**
   * Defines the color of the active tab
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The type of tabs to display..
   */
  type?: 'tabs' | 'box'
}
export interface BaseTabsTriggerSlots {
  default: () => any
}

export const variants = {
  primary: 'group-data-[state=active]/trigger:text-primary-base group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-primary-400 dark:group-data-[state=inactive]/trigger:text-muted-400',
  dark: 'group-data-[state=active]/trigger:text-muted-900 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-white dark:group-data-[state=inactive]/trigger:text-muted-400',
  muted: 'group-data-[state=active]/trigger:text-muted-700 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-muted-100 dark:group-data-[state=inactive]/trigger:text-muted-400',
} as const satisfies Record<NonNullable<BaseTabsTriggerProps['variant']>, string>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTabsTriggerProps>(), {
  type: undefined,
  icon: undefined,
  variant: undefined,
})

const slots = defineSlots<BaseTabsTriggerSlots>()

const context = injectBaseTabsContext()

const forward = useForwardProps(reactiveOmit(props, ['label', 'type', 'variant', 'icon']))
</script>

<template>
  <TabsTrigger
    v-bind="forward"
    class="group/trigger focus-visible:nui-focus z-10 relative disabled:pointer-events-none disabled:opacity-50"
    :class="[
      (props.type || context.type) && types[props.type || context.type],
      props.icon && 'flex items-center gap-1',
      (props.type || context.type === 'box' && !props.icon) && 'py-1.5 text-center',
      (props.type || context.type === 'box' && props.icon) && 'py-3 text-center',
    ]"
  >
    <slot>
      <Icon v-if="props.icon" :name="props.icon" class="me-1 block size-5" :class="(props.variant || context.variant) && variants[props.variant || context.variant]" />
      <span
        :class="[
          (props.type || context.type === 'box') && props.icon && 'text-sm',
          (props.type || context.type === 'box') && !props.icon && 'text-sm',
          (props.type || context.type === 'tabs') && 'text-sm',
          (props.variant || context.variant) && variants[props.variant || context.variant],
        ]"
      >
        {{ props.label }}
      </span>
    </slot>
  </TabsTrigger>
</template>
