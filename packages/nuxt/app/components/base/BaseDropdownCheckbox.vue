<script lang="ts">
import type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuCheckboxItemEmits,
  DropdownMenuItemIndicatorProps,
} from 'reka-ui';

export interface BaseDropdownCheckboxProps extends DropdownMenuCheckboxItemProps {
  /**
   * The title to display for the dropdown item.
   */
  title?: string

  /**
   * The text to display for the dropdown item.
   */
  text?: string

  /**
   * The hover color of the dropdown-item inner elements.
   *
   * @default 'default-high'
   */
  variant?: 'default' | 'muted' | 'primary' | 'none'

  /**
   * The radius of the dropdown-item.
   *
   * @default 'sm'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Optional bindings to pass to the inner components.
   */
  bindings?: {
    indicator?: DropdownMenuItemIndicatorProps & {
      class?: string | string[]
    }
  }
}
export interface BaseDropdownCheckboxEmits extends DropdownMenuCheckboxItemEmits {}
export type BaseDropdownCheckboxSlots = {
  default(): any
  title(): any
  text(): any
  end(): any
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { variants } from './BaseDropdownItem.vue'
import { radiuses } from './BaseDropdown.vue'

const props = withDefaults(defineProps<BaseDropdownCheckboxProps>(), {
  rounded: undefined,
  variant: undefined,
  title: undefined,
  text: undefined,

  disabled: undefined,
  modelValue: undefined,
  textValue: undefined,

  bindings: () => ({}),
})
const emits = defineEmits<BaseDropdownCheckboxEmits>()
const slots = defineSlots<BaseDropdownCheckboxSlots>()

const variant = useNuiConfig('BaseDropdownItem', 'variant', () => props.variant)
const rounded = useNuiConfig('BaseDropdownItem', 'rounded', () => props.rounded)
const iconCheck = useNuiConfig('icon', 'check')
const forward = useForwardPropsEmits(reactiveOmit(props, ['title', 'text', 'variant', 'rounded', 'bindings']), emits)
</script>

<template>
  <DropdownMenuCheckboxItem 
    v-bind="forward"
    class="nui-focus flex w-full items-center justify-start gap-2 p-2 cursor-pointer text-start font-sans text-sm transition-colors duration-300 group/menu-checkbox-item"
    :class="[
      rounded && radiuses[rounded],
      variant && variants[variant],
      props.disabled && 'opacity-50 pointer-events-none',
    ]"
  >
    <DropdownMenuItemIndicator v-bind="props.bindings?.indicator" class="flex items-center justify-center shrink-0 size-4 group-data-[state=checked]/menu-checkbox-item:text-[var(--primary-base)] group-data-[state=unchecked]/menu-checkbox-item:text-transparent">
      <Icon :name="iconCheck" class="scale-90 relative start-0.5 text-sm [&>path]:stroke-[4px]" />
    </DropdownMenuItemIndicator>

    <div class="grow group-data-[state=unchecked]/menu-checkbox-item:ps-6!">
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
    <slot name="end" />
  </DropdownMenuCheckboxItem>
</template>