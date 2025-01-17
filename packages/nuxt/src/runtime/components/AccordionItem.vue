<script setup lang="ts">
import type { BaseAccordionItemProps, BaseAccordionItemSlots } from '../types'
import { BaseAccordion as theme } from '@shuriken-ui/theme-iga'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useNuiConfig } from '../composables/useNuiConfig';
import { tm } from '../utils/tw-merge'

const props = withDefaults(defineProps<BaseAccordionItemProps>(), {
  action: theme.defaults.action,
  variant: theme.defaults.variant,
  bindings: () => ({}),
  classes: () => ({}),
})

const slots = defineSlots<BaseAccordionItemSlots>()

const iconChevron = useNuiConfig('icon', 'chevronDown')
const iconPlus = useNuiConfig('icon', 'plus')

const forward = useForwardProps(reactiveOmit(props, ['title', 'content', 'variant', 'action', 'bindings', 'classes']))
</script>

<template>
  <AccordionItem
    v-bind="forward"
    class="w-full relative block transition-colors duration-300"
  >
    <AccordionHeader
      v-bind="props.bindings?.header"
      :class="tm([
        'cursor-pointer list-none outline-none',
        props.classes.header,
      ])"
    >
      <AccordionTrigger
        v-bind="props.bindings?.trigger"
        :class="tm([
          'flex group/trigger items-center text-sm weight-medium leading-none text-muted-800 dark:text-white justify-between w-full py-3 rounded-md px-4 cursor-pointer focus-visible:nui-focus',
          props.variant === 'default' && 'hover:bg-muted-50 dark:hover:bg-muted-800',
          props.classes.trigger,
        ])" 
      >
        <div>
          <slot name="title">{{ props.title }}</slot>
        </div>
        <slot name="action">
          <div
            :class="tm([
              'ms-2 text-muted-500 dark:text-muted-300 flex items-center justify-center size-5 transition-all duration-300',
              props.action === 'chevron' && 'group-data-[state=open]/trigger:rotate-180',
              props.action === 'plus' && 'group-data-[state=open]/trigger:rotate-45',
            ])"
          >
            <BaseChip
              v-if="props.action === 'dot'"
              position="static"
              size="md"
              color="custom"
              class="text-muted-200 dark:text-muted-600 group-data-[state=open]/trigger:text-primary-500"
            />
            <Icon
              v-else-if="props.action === 'chevron'"
              :name="iconChevron"
              class="text-base"
            />
            <Icon
              v-else-if="props.action === 'plus'"
              :name="iconPlus"
              class="text-base"
            />
          </div>
        </slot>
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent 
      v-bind="props.bindings?.content"
      :class="tm([
        'px-4 mt-3 pb-4 font-sans text-sm text-muted-500 dark:text-muted-400 leading-tight',
        props.classes.content
      ])"
    >
      <slot>{{ props.content }}</slot>
    </AccordionContent>
  </AccordionItem>
</template>
