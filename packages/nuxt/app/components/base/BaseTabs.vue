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
   * Defines the color of the active tab
   *
   * @default 'default'
   */
  variant?: 'primary' | 'dark' | 'muted'

  /**
   * The horizontal alignment of the tabs.
   *
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end'

  /**
   * The radius of the boxed tab.
   *
   * @default 'md'
   */
   rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

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
  variant: ComputedRef<NonNullable<BaseTabsProps['variant']>>
  justify: ComputedRef<NonNullable<BaseTabsProps['justify']>>
  rounded: ComputedRef<NonNullable<BaseTabsProps['rounded']>>
  type: ComputedRef<NonNullable<BaseTabsProps['type']>>
}

export const radiuses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const

export const justifies = {
  start: '',
  center: 'justify-center',
  end: 'justify-end',
} as const

export const types = {
  tabs: 'cursor-pointer px-4 py-3 text-sm transition-all duration-300',
  box: 'flex flex-col rounded-xl px-5 cursor-pointer text-center transition-all duration-300',
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
  rounded: undefined,
  variant: undefined,

  modelValue: undefined,
  orientation: undefined,
  defaultValue: undefined,

  classes: () => ({}),
})
const emits = defineEmits<BaseTabsEmits>()
const slots = defineSlots<BaseTabsSlots>()

const variant = useNuiDefaultProperty(props, 'BaseTabs', 'variant')
const justify = useNuiDefaultProperty(props, 'BaseTabs', 'justify')
const rounded = useNuiDefaultProperty(props, 'BaseTabs', 'rounded')
const type = useNuiDefaultProperty(props, 'BaseTabs', 'type')

provideBaseTabsContext({
  variant,
  justify,
  rounded,
  type,
})

const forward = useForwardPropsEmits(reactiveOmit(props, ['tabs', 'variant', 'justify', 'rounded', 'type', 'classes']))
</script>

<template>
  <TabsRoot
    v-bind="forward"
    class="relative"
    :class="[
      props.orientation === 'vertical' ? 'flex flex-row' : '',
      props.classes?.wrapper,
    ]"
  >
    <TabsList
      :aria-label="props.label"
      class="relative font-sans mb-6 flex"
      :class="[
        justify && justifies[justify],
        props.orientation === 'vertical' && 'flex flex-col items-start me-16 min-w-32',
        props.orientation !== 'vertical' && type === 'tabs' && 'border-b border-muted-200 dark:border-muted-800',
        props.classes?.inner,
      ]"
    >
      <slot name="trigger">
        <BaseTabsTrigger
          v-for="(tab, key) in tabs"
          :key="key"
          v-bind="tab"
          :variant="variant"
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
        <div class="w-full h-full" :class="[
          // @todo: low-contrast-theme
          // variant === 'primary-low' && 'bg-primary-500',
          variant === 'primary' && 'bg-primary-500',
          // variant === 'dark-low' && 'bg-muted-900 dark:bg-muted-100',
          variant === 'dark' && 'bg-muted-900 dark:bg-muted-100',
          // variant === 'muted-low' && 'bg-muted-400 dark:bg-muted-400',
          variant === 'muted' && 'bg-muted-400 dark:bg-muted-500',
        ]" />
      </TabsIndicator>
      <TabsIndicator
        v-else
        class="absolute rounded-full duration-300 pointer-events-none"
        :class="[
          props.orientation === 'vertical' && 'w-full translate-y-[var(--reka-tabs-indicator-position)] h-[var(--reka-tabs-indicator-size)] top-0 start-0 transition-[height,translate]',
          props.orientation !== 'vertical' && 'h-full translate-x-[var(--reka-tabs-indicator-position)] w-[var(--reka-tabs-indicator-size)]  bottom-0 start-0 transition-[width,translate]',
        ]"
      >
        <div class="w-full h-full" :class="[
          rounded && radiuses[rounded],
          // @todo: low-contrast-theme
          // variant === 'primary-low' && 'bg-primary-500/10 dark:bg-primary-500/20',  
          variant === 'primary' && 'bg-primary-500/10 dark:bg-primary-500/20',
          // variant === 'dark-low' && 'bg-muted-900/10 dark:bg-muted-100/10',
          variant === 'dark' && 'bg-muted-900/10 dark:bg-white/10',
          // variant === 'muted-low' && 'bg-muted-100 dark:bg-muted-700',
          variant === 'muted' && 'bg-muted-100 dark:bg-muted-900',
        ]" />
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
