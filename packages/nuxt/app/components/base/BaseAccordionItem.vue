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
   * @default 'default-high'
   */
  variant?: 'default-low' | 'default-high'

  /**
   * Defines the icon used for accordion item toggle action
   *
   * @default 'dot'
   */
  action?: 'dot' | 'chevron' | 'plus'

  /**
   * Optional CSS classes to apply to the component inner elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the header element.
     */
    header?: string | string[]

    /**
     * CSS classes to apply to the trigger element.
     */
    trigger?: string | string[]

    /**
     * CSS classes to apply to the content element.
     */
    content?: string | string[]
  }
  
  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    header?: AccordionHeaderProps
    content?: AccordionContentProps
    trigger?: AccordionTriggerProps
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
  classes: () => ({}),
  bindings: () => ({}),
})

const slots = defineSlots<BaseAccordionItemSlots>()

const variant = useNuiDefaultProperty(props, 'BaseAccordion', 'variant')
const action = useNuiDefaultProperty(props, 'BaseAccordion', 'action')

const forward = useForwardProps(reactiveOmit(props, ['title', 'content', 'variant', 'action', 'classes', 'bindings']))

const iconChevron = useNuiDefaultIcon('chevronDown')
const iconPlus = useNuiDefaultIcon('plus')
</script>

<template>
  <AccordionItem
    v-bind="forward"
    class="w-full relative block transition-colors duration-300"
  >
    <AccordionHeader
      v-bind="props.bindings?.header"
      class="cursor-pointer list-none outline-none"
      :class="props.classes?.header"
    >
      <AccordionTrigger
        v-bind="props.bindings?.trigger"
        class="flex group/trigger items-center justify-between w-full py-3 rounded-md px-4 cursor-pointer nui-focus"
        :class="[
          props.classes?.trigger,
          variant === 'default-low' && 'hover:bg-muted-50 dark:hover:bg-muted-700',
          variant === 'default-high' && 'hover:bg-muted-50 dark:hover:bg-muted-800',
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
      :class="props.classes?.content"
    >
      <div class="mt-3 text-sm leading-tight">
        <slot>{{ props.content }}</slot>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>
