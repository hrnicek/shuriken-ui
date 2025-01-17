<script lang="ts">
import type { BaseTabsContext } from '../types';
import { createContext } from 'reka-ui'

export const [
  injectBaseTabsContext,
  provideBaseTabsContext,
] = createContext<BaseTabsContext>('BaseTabsContext')
</script>

<script setup lang="ts">
import type { BaseTabsProps, BaseTabsEmits, BaseTabsSlots } from '../types';
import { BaseTabs as theme } from '@shuriken-ui/theme-iga';
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseTabsProps>(), {
  type: theme.defaults.type,
  justify: theme.defaults.justify,
  rounded: theme.defaults.rounded,
  variant: theme.defaults.variant,

  modelValue: undefined,
  orientation: undefined,
  defaultValue: undefined,
})
const emits = defineEmits<BaseTabsEmits>()
const slots = defineSlots<BaseTabsSlots>()

provideBaseTabsContext({
  variant: props.variant,
  justify: props.justify,
  rounded: props.rounded,
  type: props.type,
})

const forward = useForwardPropsEmits(reactiveOmit(props, ['tabs', 'variant', 'justify', 'rounded', 'type']))
</script>

<template>
  <TabsRoot
    v-bind="forward"
    class="relative"
    :class="[
      props.orientation === 'vertical' ? 'flex flex-row' : '',
    ]"
  >
    <TabsList
      :aria-label="props.label"
      class="relative font-sans mb-6 flex"
      :class="[
        props.justify && theme.justifies[props.justify],
        props.orientation === 'vertical' && 'flex flex-col items-start me-16 min-w-32',
        props.orientation !== 'vertical' && props.type === 'tabs' && 'border-b border-muted-200 dark:border-muted-800',
      ]"
    >
      <slot name="trigger">
        <BaseTabsTrigger
          v-for="(tab, key) in tabs"
          :key="key"
          v-bind="tab"
          :variant="props.variant"
          @click="emits('update:modelValue', tab.value)"
        />
      </slot>

      
      <TabsIndicator
        v-if="props.type === 'tabs'"
        class="absolute rounded-full duration-300"
        :class="[
          props.orientation === 'vertical' && 'h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)] end-0 w-[2px] transition-[height,translate]',
          props.orientation !== 'vertical' && 'w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] start-0 h-[2px] bottom-0 transition-[width,translate]',
        ]"
      >
        <div class="w-full h-full" :class="theme.tabsIndicator[props.variant]" />
      </TabsIndicator>
      <TabsIndicator
        v-else
        class="absolute rounded-full duration-300 pointer-events-none"
        :class="[
          props.orientation === 'vertical' && 'w-full translate-y-[var(--reka-tabs-indicator-position)] h-[var(--reka-tabs-indicator-size)] top-0 start-0 transition-[height,translate]',
          props.orientation !== 'vertical' && 'h-full translate-x-[var(--reka-tabs-indicator-position)] w-[var(--reka-tabs-indicator-size)]  bottom-0 start-0 transition-[width,translate]',
        ]"
      >
        <div
          class="w-full h-full"
          :class="[
            props.rounded && theme.radiuses[props.rounded],
            theme.boxIndicator[props.variant]
          ]"
        />
      </TabsIndicator>

    </TabsList>

    <div class="relative block">
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
