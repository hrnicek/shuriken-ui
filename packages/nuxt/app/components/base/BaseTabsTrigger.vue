<script lang="ts">
import type { TabsTriggerProps } from 'reka-ui'

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
   *
   * @default 'default'
   */
  variant?: 'primary' | 'dark' | 'muted'

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

const tabVariants = {
  'primary': 'group-data-[state=active]/trigger:text-primary-base group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-primary-400 dark:group-data-[state=inactive]/trigger:text-muted-400',
  'dark': 'group-data-[state=active]/trigger:text-muted-900 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-white dark:group-data-[state=inactive]/trigger:text-muted-400',
  'muted': 'group-data-[state=active]/trigger:text-muted-700 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-muted-100 dark:group-data-[state=inactive]/trigger:text-muted-400',
} as const

// @todo: low-contrast-theme
// const tabVariants = {
//   'primary': 'group-data-[state=active]/trigger:text-primary-base group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-primary-400 dark:group-data-[state=inactive]/trigger:text-muted-400',
//   'dark': 'group-data-[state=active]/trigger:text-muted-900 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-white dark:group-data-[state=inactive]/trigger:text-muted-400',
//   'muted': 'group-data-[state=active]/trigger:text-muted-700 group-data-[state=inactive]/trigger:text-muted-400 dark:group-data-[state=active]/trigger:text-muted-100 dark:group-data-[state=inactive]/trigger:text-muted-400',
// } as const
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { injectBaseTabsContext, types } from './BaseTabs.vue'

const props = withDefaults(defineProps<BaseTabsTriggerProps>(), {
  type: undefined,
  icon: undefined,
  variant: undefined,
})

const context = injectBaseTabsContext()

const slots = defineSlots<BaseTabsTriggerSlots>()
const forward = useForwardProps(reactiveOmit(props, ['label', 'type', 'variant', 'icon']))
</script>

<template>
  <TabsTrigger 
    v-bind="forward"
    class="group/trigger z-10 relative disabled:pointer-events-none disabled:opacity-50"
    :class="[
      (props.type || context.type.value) && types[props.type || context.type.value],
      props.icon && 'flex items-center gap-1',
      (props.type || context.type.value === 'box' && !props.icon) && 'py-1.5 text-center',
      (props.type || context.type.value === 'box' && props.icon) && 'py-3 text-center',
    ]"
  >
    <slot>
      <Icon v-if="props.icon" :name="props.icon" class="me-1 block size-5" :class="(props.variant || context.variant.value) && tabVariants[props.variant || context.variant.value]" />
      <span
        :class="[
          (props.type || context.type.value === 'box') && props.icon && 'text-sm',
          (props.type || context.type.value === 'box') && !props.icon && 'text-sm',
          (props.type || context.type.value === 'tabs') && 'text-sm',
          (props.variant || context.variant.value) && tabVariants[props.variant || context.variant.value],
        ]"
      >
        {{ props.label }}
      </span>
    </slot>
  </TabsTrigger>
</template>