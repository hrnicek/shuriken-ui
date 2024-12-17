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
</script>

<script setup lang="ts">
import { injectBaseDropdownContext, colors, radiuses, sizes } from './BaseDropdown.vue'
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'

const props = defineProps<BaseDropdownSubProps>()
const emits = defineEmits<BaseDropdownSubEmits>()
const slots = defineSlots<{
  default(): any
  title(): any
  text(): any
}>()

const { color, rounded, size } = injectBaseDropdownContext()

const iconChevronRight = useNuiDefaultIcon('chevronRight')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'bindings']), emits)
</script>

<template>
  <DropdownMenuSub v-bind="forward">
    <DropdownMenuSubTrigger
      v-bind="props.bindings?.trigger"
      class="nui-dropdown-item nui-dropdown-item-rounded-sm nui-dropdown-item-default nui-dropdown-item-primary"
    >
      <div class="flex items-center justify-between w-full">
        <div class="nui-dropdown-item-content">
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
        class="nui-dropdown-menu"
        :class="[
          size && sizes[size],
          rounded && radiuses[rounded],
          color && colors[color],
        ]"
        v-bind="{
          sideOffset: 2,
          alignOffset: -5,
          ...(props.bindings?.content || {}),
        }"
      >
        <div class="nui-dropdown-menu-content">
          <slot />
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
</template>