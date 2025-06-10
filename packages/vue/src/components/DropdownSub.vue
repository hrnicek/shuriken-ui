<script lang="ts">
import type {
  DropdownMenuPortalProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubEmits,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
} from 'reka-ui'

import type { BaseDropdownProps } from './Dropdown.vue'
import { reactiveOmit } from '@vueuse/core'
import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  useForwardPropsEmits,
} from 'reka-ui'
import { useInertiaConfig } from '../composables/useInertiaConfig'
// import { BaseDropdown as dropdownTheme, BaseDropdownItem as theme } from '../theme'

import { radiuses as dropdownRadiuses, variants as dropdownVariants, injectBaseDropdownContext } from './Dropdown.vue'
import { variants as itemVariants } from './DropdownItem.vue'

export interface BaseDropdownSubProps extends DropdownMenuSubProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The variant of the dropdown content
   */
  variant?: BaseDropdownProps['variant']

  /**
   * The radius of the dropdown button.
   */
  rounded?: BaseDropdownProps['rounded']

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    trigger?: DropdownMenuSubTriggerProps
    content?: DropdownMenuSubContentProps
    portal?: DropdownMenuPortalProps
  }
}
export interface BaseDropdownSubEmits extends DropdownMenuSubEmits {}
export interface BaseDropdownSubSlots {
  default: () => any
  title: () => any
  text: () => any
}
</script>

<script setup lang="ts">
const props = defineProps<BaseDropdownSubProps>()
const emits = defineEmits<BaseDropdownSubEmits>()
const slots = defineSlots<BaseDropdownSubSlots>()

const context = injectBaseDropdownContext()

const iconChevronRight = useInertiaConfig('icon', 'chevronRight')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'bindings']), emits)
</script>

<template>
  <DropdownMenuSub v-bind="forward">
    <DropdownMenuSubTrigger
      v-bind="props.bindings?.trigger"
      class="focus-visible:nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-100"
      :class="[
        dropdownRadiuses[context.rounded],
        itemVariants[context.variant],
      ]"
    >
      <div class="flex items-center justify-between w-full">
        <div class="grow">
          <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
            <slot name="title">
              {{ props.title }}
            </slot>
          </div>
          <div
            v-if="'text' in $slots || props.text"
            class="text-muted-400 font-sans text-xs"
          >
            <slot name="text">
              {{ props.text }}
            </slot>
          </div>
        </div>
        <Icon :name="iconChevronRight" class="shrink-0 rtl:scale-x-[-1]" />
      </div>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuSubContent
        class="mt-2 min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20"
        :class="[
          dropdownRadiuses[props.rounded || context.rounded],
          dropdownVariants[props.variant || context.variant],
        ]"
        v-bind="{
          sideOffset: 2,
          alignOffset: -5,
          ...(props.bindings?.content || {}),
        }"
      >
        <div class="p-2 space-y-1 max-h-[var(--reka-popper-available-height)] overflow-y-scroll nui-slimscroll">
          <slot />
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
</template>
