<script lang="ts">
import type { 
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionContentProps,
  AccordionTriggerProps,
} from 'reka-ui'

export interface BaseAccordionItemProps extends AccordionItemProps {
  /**
   * The title of the accordion item.
   */
  title?: string
  /**
   * The content of the accordion item.
   */
  content?: string

  /**
   * The variant of the accordion.
   *
   * @default 'default'
   */
  variant?: 'default'

  /**
   * Defines the icon used for accordion item toggle action
   *
   * @default 'dot'
   */
  action?: 'dot' | 'chevron' | 'plus'
  
  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    header?: AccordionHeaderProps & {
      class?: string | string[]
    }
    content?: AccordionContentProps & {
      class?: string | string[]
    }
    trigger?: AccordionTriggerProps & {
      class?: string | string[]
    }
  }
}

export type BaseAccordionItemSlots = {
  default(): any
  title(): any
  action(): any
}
</script>


<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = withDefaults(defineProps<BaseAccordionItemProps>(), {
  action: undefined,
  variant: undefined,
  bindings: () => ({}),
})

const slots = defineSlots<BaseAccordionItemSlots>()

const variant = useNuiConfig('BaseAccordion', 'variant', () => props.variant)
const action = useNuiConfig('BaseAccordion', 'action', () => props.action)
const iconChevron = useNuiConfig('icon', 'chevronDown')
const iconPlus = useNuiConfig('icon', 'plus')

const forward = useForwardProps(reactiveOmit(props, ['title', 'content', 'variant', 'action', 'bindings']))

</script>

<template>
  <AccordionItem
    v-bind="forward"
    class="w-full relative block transition-colors duration-300"
  >
    <AccordionHeader
      v-bind="props.bindings?.header"
      class="cursor-pointer list-none outline-none"
    >
      <AccordionTrigger
        v-bind="props.bindings?.trigger"
        class="flex group/trigger items-center justify-between w-full py-3 rounded-md px-4 cursor-pointer nui-focus"
        :class="[
          // variant === 'default' && 'hover:bg-muted-50 dark:hover:bg-muted-700', @todo: low-contrast-theme
          variant === 'default' && 'hover:bg-muted-50 dark:hover:bg-muted-800',
        ]" 
      >
        <div 
          class="text-sm weight-medium leading-none text-muted-800 dark:text-white"
        >
          <slot name="title">{{ props.title }}</slot>
        </div>

        <div
          class="ms-2 text-muted-500 dark:text-muted-300 flex items-center justify-center size-5 transition-all duration-300"
          :class="[
            action === 'chevron' && 'group-data-[state=open]/trigger:rotate-180',
            action === 'plus' && 'group-data-[state=open]/trigger:rotate-45',
          ]"
        >
          <slot name="action">
            <BaseChip
              v-if="action === 'dot'"
              position="static"
              size="md"
              color="custom"
              class="text-muted-200 dark:text-muted-600 group-data-[state=open]/trigger:text-primary-500"
            />
            <Icon
              v-else-if="action === 'chevron'"
              :name="iconChevron"
              class="text-base"
            />
            <Icon
              v-else-if="action === 'plus'"
              :name="iconPlus"
              class="text-base"
            />
          </slot>
        </div>
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent 
      v-bind="props.bindings?.content"
      class="px-4 pb-4 font-sans text-sm text-muted-500 dark:text-muted-400" 
    >
      <div class="mt-3 text-sm leading-tight">
        <slot>{{ props.content }}</slot>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>
