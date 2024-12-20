<script lang="ts">
import type { 
  TabsRootProps,
  TabsRootEmits,
} from 'reka-ui'
import {
  createContext,
} from 'reka-ui'
import type { BaseTabsTriggerProps } from './BaseTabsTrigger.vue'

export interface BaseTabsProps extends TabsRootProps {
  /**
   * An array of tab objects that contain a label and value
   */
  tabs: BaseTabsTriggerProps[]

  /**
   * Accessible label for the tabs
   */
  label?: string

  /**
   * Defines the hover color of the active tab
   *
   * @since 3.0.0
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'light' | 'dark' | 'black'

  /**
   * The horizontal alignment of the tabs.
   *
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end'

  /**
   * The type of tabs to display..
   *
   * @default 'tabs'
   */
  type?: 'tabs' | 'box'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[]

    /**
     * CSS classes to apply to the inner element.
     */
    inner?: string | string[]

    /**
     * CSS classes to apply to the item element.
     */
    item?: string | string[]

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[]
  }
}
export interface BaseTabsEmits extends TabsRootEmits {}
export type BaseTabsSlots = {
  default(): any
  trigger(): any
}
export interface BaseTabsContext {
  color: ComputedRef<NonNullable<BaseTabsProps['color']>>
  justify: ComputedRef<NonNullable<BaseTabsProps['justify']>>
  type: ComputedRef<NonNullable<BaseTabsProps['type']>>
}

export const justifies = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
} as const

export const types = {
  tabs: 'nui-tab-item',
  box: 'nui-tab-pill-item',
} as const

export const colors = {
  default: 'nui-tabs-default',
  primary: 'nui-tabs-primary',
  light: 'nui-tabs-light',
  dark: 'nui-tabs-dark',
  black: 'nui-tabs-black',
} as const

export const [
  injectBaseTabsContext,
  provideBaseTabsContext,
] = createContext<BaseTabsContext>('BaseTabsContext')
</script>


<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTabsProps>(), {
  type: undefined,
  justify: undefined,
  color: undefined,

  modelValue: undefined,
  orientation: undefined,
  defaultValue: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseTabsEmits>()
const slots = defineSlots<BaseTabsSlots>()

const color = useNuiDefaultProperty(props, 'BaseTabs', 'color')
const justify = useNuiDefaultProperty(props, 'BaseTabs', 'justify')
const type = useNuiDefaultProperty(props, 'BaseTabs', 'type')

provideBaseTabsContext({
  color,
  justify,
  type,
})

const forward = useForwardPropsEmits(reactiveOmit(props, ['tabs', 'color', 'justify', 'type', 'classes']))
</script>

<template>
  <TabsRoot
    v-bind="forward"
    class="nui-tabs"
    :class="[
      justify && justifies[justify],
      color && colors[color],
      type === 'tabs' && 'nui-tabs-bordered',
      props.orientation === 'vertical' && 'flex flex-row',
      props.classes?.wrapper,
    ]"
  >
    <TabsList
      :aria-label="props.label"
      class="relative nui-tabs-inner"
      :class="[
        props.orientation === 'vertical' && 'flex flex-col items-start me-6',
        props.classes?.inner,
      ]"
    >
      <slot name="trigger">
        <BaseTabsTrigger
          v-for="(tab, key) in tabs"
          :key="key"
          v-bind="tab"
          @click="emits('update:modelValue', tab.value)"
        />
      </slot>

      
      <TabsIndicator
        v-if="type === 'tabs'"
        class="absolute rounded-full duration-300"
        :class="[
          props.orientation === 'vertical' && 'h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)] end-0 w-[2px] transition-[height,translate]',
          props.orientation !== 'vertical' && 'w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] start-0 h-[2px] bottom-0 transition-[width,translate]',
        ]"
      >
        <div class="bg-primary-500 w-full h-full" />
      </TabsIndicator>
      <TabsIndicator
        v-else
        class="absolute rounded-full duration-300 pointer-events-none"
        :class="[
          props.orientation === 'vertical' && 'w-full translate-y-[var(--reka-tabs-indicator-position)] h-[var(--reka-tabs-indicator-size)] top-0 start-0 transition-[height,translate]',
          props.orientation !== 'vertical' && 'h-full translate-x-[var(--reka-tabs-indicator-position)] w-[var(--reka-tabs-indicator-size)]  bottom-0 start-0 transition-[width,translate]',
        ]"
      >
        <div class="bg-muted-100 dark:bg-muted-900 w-full h-full" />
      </TabsIndicator>

    </TabsList>

    <div class="relative block" :class="props.classes?.content">
      <slot>
        <BaseTabsContent 
          v-for="(tab, key) in tabs" 
          :key="key" 
          :value="tab.value" 
        >
          {{ tab.value }}
        </BaseTabsContent>
      </slot>
    </div> 
  </TabsRoot>
</template>
