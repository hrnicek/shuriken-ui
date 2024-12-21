<script lang="ts">
import type { 
  DropdownMenuSubProps,
  DropdownMenuSubEmits,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
  DropdownMenuPortalProps,
} from 'reka-ui'

export interface BaseDropdownSubProps extends DropdownMenuSubProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  bindings?: {
    trigger?: DropdownMenuSubTriggerProps,
    content?: DropdownMenuSubContentProps,
    portal?: DropdownMenuPortalProps,
  }
}
export interface BaseDropdownSubEmits extends DropdownMenuSubEmits {}
export type BaseDropdownSubSlots = {
  default(): any
  title(): any
  text(): any
}
</script>

<script setup lang="ts">
import { injectBaseDropdownContext, variants as dropdownVariants } from './BaseDropdown.vue'
import { variants } from './BaseDropdownItem.vue'
import { radiuses } from './BaseDropdown.vue'
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<BaseDropdownSubProps>()
const emits = defineEmits<BaseDropdownSubEmits>()
const slots = defineSlots<BaseDropdownSubSlots>()

const context = injectBaseDropdownContext()

const iconChevronRight = useNuiDefaultIcon('chevronRight')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'bindings']), emits)
</script>

<template>
  <DropdownMenuSub v-bind="forward">
    <DropdownMenuSubTrigger
      v-bind="props.bindings?.trigger"
      class="nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300"
      :class="[
        context.rounded.value && radiuses[context.rounded.value],
        context.variant.value && variants[context.variant.value],
      ]"
    >
      <div class="flex items-center justify-between w-full">
        <div class="grow">
          <div class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
            <slot name="title">
              {{ props.title }}
            </slot>
          </div>
          <p
            v-if="'text' in $slots || props.text"
            class="text-muted-400 font-sans text-xs"
          >
            <slot name="text">
              {{ props.text }}
            </slot>
          </p>
        </div>
        <Icon :name="iconChevronRight" />
      </div>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal v-bind="props.bindings?.portal">
      <DropdownMenuSubContent
        class="mt-2 min-w-52 focus:outline-none shadow-lg shadow-muted-300/30 dark:shadow-muted-800/20"
        :class="[
          context.rounded.value && radiuses[context.rounded.value],
          context.variant.value && dropdownVariants[context.variant.value],
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